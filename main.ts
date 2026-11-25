// The Most Boring Object, Reviewed in One Line
// Entry: a one-line review of the most boring everyday object.
// Node-stdlib-only: writes entry.txt to MAKEFUN_OUTPUT_DIR (or /output).
const fs = require("node:fs");
const path = require("node:path");

const ENTRY =
  "My doorstop has had exactly one job for nine years, and it does it perfectly, silently, and without ever asking for a raise.";

if (/[\u0000-\u001F\u007F]/.test(ENTRY) || ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not contain control characters or leading/trailing whitespace");
}

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-whitespace characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
