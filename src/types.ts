export interface CommitInfo {
	message: string;
}

export interface ChangeEntry {
	type: string; // 'Features', 'Bug Fixes', 'Refactor', etc.
	commits: CommitInfo[];
}

export interface VersionRelease {
	version: string;
	date: string;
	compareUrl?: string;
	changes: ChangeEntry[];
}

export interface ParsedChangelog {
	releases: VersionRelease[];
}
