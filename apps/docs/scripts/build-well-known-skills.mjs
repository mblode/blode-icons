// Build script for .well-known/agent-skills discovery
// Spec: https://schemas.agentskills.io/discovery/0.2.0/schema.json
//
// Zero dependencies — uses only Node.js built-ins.
// Parses SKILL.md frontmatter to auto-extract name and description.

import { createHash } from "node:crypto";
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync, copyFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const APP_ROOT = join(__dirname, "..");
const OUTPUT_DIR = join(APP_ROOT, "public", ".well-known", "agent-skills");

// --- Configuration ---
const CONFIG = {
  skills: [
    {
      sourceDir: "../../../skills/blode-icons-react",
      type: "archive",
    },
  ],
};

// --- Frontmatter parser ---
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) throw new Error("No YAML frontmatter found in SKILL.md");

  const yaml = match[1];
  const fields = {};
  for (const line of yaml.split("\n")) {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim();
    fields[key] = value;
  }

  if (!fields.name) throw new Error("SKILL.md frontmatter missing 'name' field");
  if (!fields.description) throw new Error("SKILL.md frontmatter missing 'description' field");

  return { name: fields.name, description: fields.description };
}

// --- SHA-256 digest ---
function sha256(filePath) {
  const data = readFileSync(filePath);
  const hash = createHash("sha256").update(data).digest("hex");
  return `sha256:${hash}`;
}

// --- Main ---
function main() {
  const t0 = performance.now();

  // Clean output
  rmSync(OUTPUT_DIR, { recursive: true, force: true });
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const skills = [];

  for (const skill of CONFIG.skills) {
    const sourceDir = resolve(__dirname, skill.sourceDir);
    const skillMdPath = join(sourceDir, "SKILL.md");

    if (!existsSync(skillMdPath)) {
      console.error(`ERROR: SKILL.md not found at ${skillMdPath}`);
      process.exit(1);
    }

    const content = readFileSync(skillMdPath, "utf8");
    const { name, description } = parseFrontmatter(content);

    if (skill.type === "skill-md") {
      const skillDir = join(OUTPUT_DIR, name);
      mkdirSync(skillDir, { recursive: true });
      const destPath = join(skillDir, "SKILL.md");
      copyFileSync(skillMdPath, destPath);

      const digest = sha256(destPath);
      skills.push({
        name,
        type: "skill-md",
        description,
        url: `/.well-known/agent-skills/${name}/SKILL.md`,
        digest,
      });

      console.log(`  ${name} (skill-md) -> ${name}/SKILL.md [${digest.slice(0, 20)}...]`);
    } else if (skill.type === "archive") {
      const archiveName = `${name}.tar.gz`;
      const archivePath = join(OUTPUT_DIR, archiveName);

      execSync(`tar czf "${archivePath}" -C "${dirname(sourceDir)}" "${name}"`, {
        stdio: "pipe",
      });

      const digest = sha256(archivePath);
      skills.push({
        name,
        type: "archive",
        description,
        url: `/.well-known/agent-skills/${archiveName}`,
        digest,
      });

      console.log(`  ${name} (archive) -> ${archiveName} [${digest.slice(0, 20)}...]`);
    } else {
      console.error(`ERROR: Unknown skill type "${skill.type}" for ${name}`);
      process.exit(1);
    }
  }

  const index = {
    $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
    skills,
  };

  writeFileSync(join(OUTPUT_DIR, "index.json"), JSON.stringify(index, null, 2) + "\n");

  const elapsed = ((performance.now() - t0) / 1000).toFixed(1);
  console.log(`\n.well-known/agent-skills built (${skills.length} skill${skills.length === 1 ? "" : "s"}) in ${elapsed}s`);
}

main();
