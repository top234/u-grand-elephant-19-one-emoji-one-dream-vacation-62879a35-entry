import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One emoji, one dream vacation: Mount Fuji.
// 🗻 (U+1F5FB) — a single snow-capped peak. Instantly readable across
// cultures, vivid like a postcard, and specific: not just "a mountain",
// but the mountain people dream of climbing at sunrise.
const EMOJI = "\u{1F5FB}";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
