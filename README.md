
# Changelog Parser

This project is a TypeScript-based tool for parsing and formatting changelog files. It reads a changelog file, parses its content, and outputs the parsed data in JSON format or a formatted text version.

## Features

- Parse changelog files to extract version releases, change types, and commit information.
- Validate commit hash formats and consistency.
- Optionally include commit URLs in the formatted output.
- Output parsed data as JSON or formatted text.

## Installation

To install the dependencies, run:

```sh
npm install -g @scr2em/changelog-parser
```

## Usage

You can use the `ChangelogParser` class to parse changelog content and format it. The script can be run from the command line with the following options:

- `--top-only`: Only include the top release.
- `--to-text`: Output the parsed changelog as formatted text.
- `--include-commit-url`: Include commit URLs in the formatted text output.

### Command Line

To run the script from the command line, use:

```sh
changelog-parser <path-to-changelog-file> [options]
```

### Example

```sh
changelog-parser CHANGELOG.md --to-text --include-commit-url
```

## API

### `ChangelogParser`

#### Methods

- `parse(content: string): ParsedChangelog`
	- Parses the given changelog content and returns a `ParsedChangelog` object.

- `static formatChangelog(releases: VersionRelease[], options?: { includeCommitUrl: boolean }): string`
	- Formats the parsed changelog data into a string. Optionally includes commit URLs.

## Types

### `CommitInfo`

```typescript
interface CommitInfo {
  message: string;
  shortHash: string;
  fullHash: string;
  url: string;
}
```

### `ChangeEntry`

```typescript
interface ChangeEntry {
  type: string;
  commits: CommitInfo[];
}
```

### `VersionRelease`

```typescript
interface VersionRelease {
  version: string;
  date: string;
  compareUrl?: string;
  changes: ChangeEntry[];
}
```

### `ParsedChangelog`

```typescript
interface ParsedChangelog {
  releases: VersionRelease[];
}
```

## License

This project is licensed under the MIT License.
```

