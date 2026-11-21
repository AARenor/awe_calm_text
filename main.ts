import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One constant: the tournament text must be emitted unchanged, never rebuilt.
const TEXT =
  "A ferry lets go of the quay with one long note. The water closes over the gap and stays closed. Gulls go quiet in the order they landed, and the town keeps its lights on for nobody in particular.";

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
