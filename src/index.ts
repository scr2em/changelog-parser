#!/usr/bin/env node

import fs from "fs";

import { ParsedChangelog, VersionRelease } from "./types";

export class ChangelogParser {
	private static readonly VERSION_PATTERN =
		/^### \[([\d\.-]+(?:-rc\.\d+)?)\]\((.*?)\/compare\/v([\d\.-]+(?:-rc\.\d+)?)\...v([\d\.-]+(?:-rc\.\d+)?)\) \((\d{4}-\d{2}-\d{2})\)$/;

	private readonly CHANGE_TYPE_PATTERN = /### ([A-Za-z ]+)/;
	private readonly COMMIT_PATTERN = /^-\s\s\s/;

	private isVersionLine(line: string): boolean {
		return line.startsWith("### [");
	}

	// ### [9.6.3-rc.6](https://bitbucket.org/leadliaisondev/gocv2/compare/v9.6.3-rc.5...v9.6.3-rc.6) (2024-12-26)
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

	public parse(content: string): ParsedChangelog {
		const lines = content.split("\n");
		const releases: VersionRelease[] = [];
		let currentRelease: VersionRelease | null = null;
		let currentChangeType: string | null = null;

		for (let i = 0; i < lines.length; i++) {
			const line = lines[i].trim();

			// Skip empty lines and header
			if (!line || (line.startsWith("#") && !line.startsWith("###"))) {
				continue;
			}

			// Check for version release
			if (this.isVersionLine(line)) {
				if (currentRelease) {
					releases.push(currentRelease);
				}

				const { version, date, compareUrl } = this.parseVersionLine(line);
				currentRelease = {
					version,
					date,
					compareUrl,
					changes: [],
				};
				continue;
			}

			// Check for change type
			const changeTypeMatch = line.match(this.CHANGE_TYPE_PATTERN);
			if (changeTypeMatch && currentRelease) {
				currentChangeType = changeTypeMatch[1].trim();
				currentRelease.changes.push({
					type: currentChangeType,
					commits: [],
				});
				continue;
			}

			// Parse commit
			const commitMatch = line.match(this.COMMIT_PATTERN);
			if (commitMatch && currentRelease && currentChangeType) {
				const currentChangeEntry = currentRelease.changes.find((change) => change.type === currentChangeType);
				console.log(commitMatch);
				console.log(currentChangeEntry);
				if (currentChangeEntry) {
					currentChangeEntry.commits.push({
						message: line,
					});
				}
			}
		}

		// Don't forget to add the last release
		if (currentRelease) {
			releases.push(currentRelease);
		}

		return { releases };
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

		const parsed = parser.parse(input);
		console.log(JSON.stringify(parsed, null, 2));
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

main();
