import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One constant: the tournament text must be emitted unchanged, never rebuilt.
const TEXT =
  "The harbour at six: a rope knocks against a mast, once, then quiet. A man coils it without looking and walks off. The water goes on lifting the boats by an inch and putting them back.";

function assertFits(text: string): void {
  const count = [...text].length;
  if (count < 1 || count > 280) {
    throw new Error(`text has ${count} code points, outside 1 to 280`);
  }
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
assertFits(TEXT);
writeFileSync(join(dir, "entry.txt"), TEXT, "utf8");
process.exit(0);
