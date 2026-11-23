// One Emoji, One Smile — make.fun u-0xkianno-one-emoji-one-smile-5470751f
//
// Choice: 🤗 Hugging Face (U+1F917, one code point, 4 bytes UTF-8).
// Why this one, against the judge's brief (most important first):
//  1. Warm and friendly at first glance: an open smile with open arms —
//     a hug offered, instantly readable as kind with no context needed.
//  2. Universal: a hug gesture reads the same to any age or background,
//     no irony, in-joke, sarcasm or flirtation.
//  3. Chosen, not default: it is not the first smiley that comes to mind
//     (🙂 / 😀), yet it stays instantly readable.
//  4. Right for a stranger: a friendly virtual hug, not intimacy —
//     unlike 🥰 (hearts read as affectionate/flirty from a stranger).
//  5. Not an anchor risk by design: a single code point, no variation
//     selector, no ZWJ sequence, no trailing newline — exactly 1 character.
//
// The program writes exactly that one emoji to /output/entry.txt and
// nothing else. Fully offline, deterministic, no network, no randomness,
// no clock, no API key.
//
// After writing, it reads the file back and verifies the gate itself:
// exactly one Unicode code point, 4 bytes of UTF-8, no trailing newline.
// If the check ever fails the program exits non-zero instead of leaving
// a file the sealed scorer would mark invalid.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🤗";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if ([...back].length !== 1 || back !== EMOJI || Buffer.byteLength(back, "utf8") !== 4) {
  throw new Error("entry.txt failed its own gate check: expected exactly one emoji");
}
