#!/usr/bin/env node
// Checks the repo's structure: manifests parse, every skill folder has a
// SKILL.md whose frontmatter has a name matching its folder and a
// description, and every eval case names existing skills.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

let bad = 0;
const fail = (msg) => { console.error("✗ " + msg); bad++; };

for (const f of [".claude-plugin/marketplace.json", ".claude-plugin/plugin.json"]) {
  try { JSON.parse(readFileSync(f, "utf8")); } catch (e) { fail(`${f}: ${e.message}`); }
}
const market = JSON.parse(readFileSync(".claude-plugin/marketplace.json", "utf8"));
const plugin = JSON.parse(readFileSync(".claude-plugin/plugin.json", "utf8"));
if (!market.plugins?.some((p) => p.name === plugin.name)) fail("marketplace doesn't list the plugin by its manifest name");

const skills = readdirSync("skills", { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
for (const s of skills) {
  const p = join("skills", s, "SKILL.md");
  if (!existsSync(p)) { fail(`${p} missing`); continue; }
  const text = readFileSync(p, "utf8");
  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) { fail(`${p}: no frontmatter`); continue; }
  const name = fm[1].match(/^name:\s*(.+)$/m)?.[1]?.trim();
  const desc = fm[1].match(/^description:\s*(.+)$/m)?.[1]?.trim();
  if (name !== s) fail(`${p}: name "${name}" must match the folder "${s}"`);
  if (!/^[a-z0-9-]{1,64}$/.test(s)) fail(`${s}: skill names are lowercase letters, digits and hyphens`);
  if (!desc || desc.length < 40 || desc.length > 1024) fail(`${p}: description must be 40-1024 characters`);
}
for (const c of JSON.parse(readFileSync("evals/cases.json", "utf8"))) {
  for (const s of c.skills) if (!skills.includes(s)) fail(`eval "${c.prompt}" names unknown skill ${s}`);
}
if (bad) process.exit(1);
console.log(`✓ ${skills.length} skills, manifests and evals look right`);
