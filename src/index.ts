#!/usr/bin/env node

import fs from "fs";

import { ChangeEntry, CommitInfo, ParsedChangelog, VersionRelease } from "./types";

export class ChangelogParser {
	private static readonly COMMIT_PATTERN =
		/^-\s+(.+?)\s+\((?:\[)?([a-f0-9]{7,8})(?:\])?\((.*?)\/commits\/([a-f0-9]{40})\)\)$/;
	private readonly CHANGE_TYPE_PATTERN = /### ([A-Za-z ]+)/;

	private isVersionLine(line: string): boolean {
		return line.startsWith("## [");
	}

	private parseVersionLine(line: string) {
		let version = "";
		let compareUrl = "";
		let date = "";

		for (let i = 0; i < line.length; i++) {
			if (line[i] === "[") {
				i++;
				while (line[i] !== "]") {
					version += line[i];
					i++;
				}
			}
			if (line[i] === "(") {
				i++;
				while (line[i] !== ")" && i < line.length) {
					if (line[i] === "h") {
						while (line[i] !== ")") {
							compareUrl += line[i];
							i++;
						}
					}
					if (line[i] === "2") {
						while (line[i] !== ")") {
							date += line[i];
							i++;
						}
					}
					i++;
				}
			}
		}
		return {
			version,
			compareUrl,
			date,
		};
	}

	private isChangeTypeLine(line: string): boolean {
		return Boolean(line.match(this.CHANGE_TYPE_PATTERN));
	}

	private parseChangeTypeLine(line: string): string {
		const match = line.match(this.CHANGE_TYPE_PATTERN);
		if (match) {
			return match[1].trim();
		}
		return "";
	}

	private parseCommitLine(line: string): CommitInfo | null {
		const match = line.match(ChangelogParser.COMMIT_PATTERN);

		if (!match) {
			return null;
		}

		const [_, message, shortHash, baseUrl, fullHash] = match;

		// Validate hash consistency
		if (!fullHash.startsWith(shortHash)) {
			throw new Error(`Hash mismatch: ${shortHash} is not a prefix of ${fullHash}`);
		}

		// Validate hash formats
		if (!/^[a-f0-9]{7,8}$/.test(shortHash)) {
			throw new Error(`Invalid short hash format: ${shortHash}`);
		}
		if (!/^[a-f0-9]{40}$/.test(fullHash)) {
			throw new Error(`Invalid full hash format: ${fullHash}`);
		}

		return {
			message: message.trim(),
			shortHash,
			fullHash,
			url: `${baseUrl}/commits/${fullHash}`,
		};
	}

	public parse(content: string): ParsedChangelog {
		const lines = content.split("\n");
		const releases: VersionRelease[] = [];

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();

			// Skip empty lines and header
			if (!line || (line.startsWith("#") && !line.startsWith("##"))) {
				continue;
			}

			// Check for version release
			if (this.isVersionLine(line)) {
				const { version, date, compareUrl } = this.parseVersionLine(line);

				let currentRelease: VersionRelease = {
					version,
					date,
					compareUrl,
					changes: [],
				};
				while (i + 1 < lines.length && !this.isVersionLine(lines[i + 1])) {
					i++;
					const nextLine = lines[i].trim();

					const changeTypeMatch = this.isChangeTypeLine(nextLine);
					if (changeTypeMatch) {
						const changeType: ChangeEntry = {
							type: this.parseChangeTypeLine(nextLine),
							commits: [],
						};

						while (
							i + 1 < lines.length &&
							!this.isVersionLine(lines[i + 1]) &&
							!this.isChangeTypeLine(lines[i + 1])
						) {
							i++;
							const nextLine = lines[i].trim();

							const commitMatch = this.parseCommitLine(nextLine);
							if (commitMatch && !nextLine.includes("release:")) {
								changeType.commits.push(commitMatch);
							}
						}
						if (changeType.commits.length) {
							currentRelease.changes.push(changeType);
						}
					}
				}

				releases.push(currentRelease);
			}
		}
		return { releases };
	}

	public static formatChangelog(releases: VersionRelease[], options?: { includeCommitUrl: boolean }): string {
		let output = "";

		releases.forEach((release) => {
			output += `Version ${release.version} (${release.date})\n`;

			release.changes.forEach((change) => {
				output += `\n${change.type}:\n`;
				change.commits.forEach((commit) => {
					output += `- ${commit.message} ${options?.includeCommitUrl ? `([${commit.shortHash}](${commit.url}))` : ""}\n`;
				});
			});

			output += "\n---\n\n";
		});

		return output;
	}
}

async function main() {
	const parser = new ChangelogParser();
	let input = "";

	try {
		// Check if file path is provided as argument
		if (process.argv.length > 2) {
			const filePath = process.argv[2];
			input = await fs.promises.readFile(filePath, "utf8");
		} else {
			// Read from stdin
			const chunks = [];
			for await (const chunk of process.stdin) {
				chunks.push(chunk);
			}
			input = Buffer.concat(chunks).toString("utf8");
		}
		const topOnly = process.argv.includes("--top-only");
		const toText = process.argv.includes("--text");
		const includeCommitUrl = process.argv.includes("--include-commit-url");

		const parsed = parser.parse(input);
		if (topOnly) {
			parsed.releases = parsed.releases.slice(0, 1);
		}

		if (toText) {
			console.log(ChangelogParser.formatChangelog(parsed.releases, { includeCommitUrl }));
		} else {
			console.log(JSON.stringify(parsed, null, 2));
		}
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

main();
