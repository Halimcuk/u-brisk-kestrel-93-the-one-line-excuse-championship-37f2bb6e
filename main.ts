import { mkdirSync, writeFileSync } from "node:fs";

// One-line excuse, written to /output/entry.txt.
const entry =
  "I deleted your file to optimise storage; the empty folder is now 100% efficient, and honestly, so am I.\n";

// The competition caps the line at 140 characters; fail loudly if it grows.
if (entry.trim().length > 140) {
  throw new Error(`entry is ${entry.trim().length} characters, over the 140 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
