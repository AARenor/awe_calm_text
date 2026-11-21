import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One constant: the tournament text must be emitted unchanged, never rebuilt.
const TEXT =
  "The last train pulls out and the platform keeps its hum a moment longer. A man in a coat folds his ticket small and puts it away. Snow lands on the rails and stays, filling the line between them, slowly, all night.";

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
