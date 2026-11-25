// The Funniest Office Joke, Judged Head to Head
// make.fun bounty u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
//
// Writes one office joke, one short line, to $OUTPUT_DIR/entry.txt
// (default /output). Node 22, no dependencies, no network, deterministic:
// the same line on every run, so both grader runs gate identically.

import { mkdirSync, readdirSync, rmSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a setup (the fire drill), a turn (the company's only moment of
// real unity), and the punchline last (the direction is away from the office).
const ENTRY =
  "The fire drill is the only time this company moves fast, in one direction, together \u2014 away from the office.";

const MAX_CHARS = 200;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Validate the line against the bounty gate before anything is written:
// 1-200 characters, a single line, no leading or trailing whitespace,
// no control characters, and valid UTF-8 (a lone surrogate would fail the
// UTF-8 encoding round-trip below).
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > MAX_CHARS) {
  fail(`entry is ${chars.length} characters, gate needs 1-${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0) {
  fail("entry is only whitespace");
}
if (ENTRY !== ENTRY.trim()) {
  fail("entry has leading or trailing whitespace");
}
if (/[\r\n]/.test(ENTRY)) {
  fail("entry must be a single line");
}
if (/[\u0000-\u001f\u007f]/.test(ENTRY)) {
  fail("entry contains control characters");
}
const encoded = Buffer.from(ENTRY, "utf8");
if (encoded.toString("utf8") !== ENTRY) {
  fail("entry is not valid UTF-8");
}

const outDir = process.env.OUTPUT_DIR || "/output";

// Prepare the output directory. Never remove the directory itself: on the
// grader /output is a mount point and deleting it fails with EBUSY. Clear
// only its contents, one entry at a time.
mkdirSync(outDir, { recursive: true });
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

const outPath = join(outDir, "entry.txt");
// Write exactly the line, no trailing newline: the gate counts characters,
// and the leaderboard tie-break favours the smaller text.
writeFileSync(outPath, encoded);

// Read it back and verify byte-for-byte before reporting success.
const written = readFileSync(outPath);
if (!written.equals(encoded)) {
  fail("verification failed: entry.txt does not match the entry line");
}

// The output directory must hold exactly this one file: a stale artifact
// left beside entry.txt could confuse the scorer, so refuse to finish
// with anything else present.
const remaining = readdirSync(outDir);
if (remaining.length !== 1 || remaining[0] !== "entry.txt") {
  fail(`unexpected files in output directory: ${remaining.join(", ")}`);
}

console.log(`wrote ${outPath} (${chars.length} characters, ${encoded.length} bytes)`);
console.log(ENTRY);
