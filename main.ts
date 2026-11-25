// make.fun bounty u-alfasurya91-make-the-ai-judge-laugh-6ed40225
// "Make the AI Judge Laugh" — one line about office life, under 200 chars.
// This program writes that single line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Badge swipe: the only time we are truly on the clock is when we are already off it.";

const OUTPUT_PATH = "/output/entry.txt";

function validateLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`line must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line");
  }
  for (const ch of line) {
    const code = ch.charCodeAt(0);
    if ((code < 0x20 && ch !== "\t") || code === 0x7f) {
      throw new Error("line must not contain control characters");
    }
  }
}

function main(): void {
  validateLine(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE + "\n", "utf8");
  console.log(`Wrote ${LINE.length}-char line to ${OUTPUT_PATH}`);
}

main();
