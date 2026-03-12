---
name: blode-icons-react
description: Guides work on the blode-icons-react package and docs in this monorepo. Covers install and import paths, Lucide-compatible aliases, DynamicIcon naming, repo conventions, and release workflow. Use when working with blode-icons-react, blode-icons, icon quick starts, docs examples, export changes, or maintaining the React icon package in this repo.
---

# Blode Icons React

Blode Icons React is the published React package in this monorepo. Treat it as the default context when the request mentions `blode-icons-react`, `blode-icons`, icon imports from this repo, package quick starts, or docs examples built from this library.

Use generic icon-library or Lucide knowledge only for concepts this skill does not override.

## Reference Files

Load only what the task needs.

| File | Read when |
| --- | --- |
| `references/install-and-usage.md` | Explaining installation, quick starts, import styles, props, or `DynamicIcon` usage |
| `references/api-surface.md` | Changing exports, validating import paths, or writing examples that rely on the public package surface |
| `references/repo-conventions.md` | Editing the package or docs app, running builds, or preparing a release |
| `references/source-of-truth.md` | Existing docs or examples disagree and you need to resolve the conflict |

## Rules

Load the relevant rule files before writing code snippets, docs copy, or package-surface changes.

| Priority | Category | Impact | Prefix | Rules |
| --- | --- | --- | --- | --- |
| 1 | Public API and naming | CRITICAL | `api-` | 2 |
| 2 | Docs and quick starts | HIGH | `docs-` | 1 |
| 3 | Repo workflow and releases | HIGH | `repo-` | 1 |

See `rules/_sections.md` for category definitions before loading an individual rule file.

## Source Of Truth

Use `references/source-of-truth.md` when READMEs, docs examples, and generated package output disagree.

## Workflow

Copy this checklist when the task is substantial:

```text
Blode Icons React workflow:
- [ ] Step 1: Identify the task mode
- [ ] Step 2: Load the matching reference files
- [ ] Step 3: Inspect the local package or docs source
- [ ] Step 4: Apply Blode Icons defaults and relevant rule files
- [ ] Step 5: Validate commands, imports, and release implications
```

### Step 1: Identify the task mode

Sort the task into one of these modes:

- Package usage or onboarding help
- Docs examples or README copy
- Package implementation or export changes
- Release or versioning work

### Step 2: Load the matching references

- Installation or usage help: read `references/install-and-usage.md`
- Export paths or API questions: read `references/api-surface.md`
- In-repo changes or release workflow: read `references/repo-conventions.md`
- Conflicting examples or docs drift: read `references/source-of-truth.md`

### Step 3: Apply Blode Icons defaults

Unless the user explicitly asks for something else:

- Prefer `npm install blode-icons-react` as the default quick-start command; use `pnpm`, `yarn`, or `bun` variants when the context calls for them
- Treat the root package entrypoint as the default import path for named icons and type exports
- Use `blode-icons-react/icons/<kebab-name>` only for per-icon default imports
- Use `blode-icons-react/dynamic` for `DynamicIcon` and `blode-icons-react/dynamicIconImports` only when the raw import map is required
- Treat `DynamicIcon` names as exported component keys such as `SearchIcon`, `Search`, or `ChevronDownIcon`, not kebab-case filenames
- Treat Lucide-style aliases as a mapped compatibility layer, not the only naming scheme; the full library uses `Icon` suffix exports
- Run repo commands from the monorepo root

### Step 4: Load rule files before writing

- Import paths or naming questions: `rules/api-import-paths.md`
- Lucide-compatibility claims or `DynamicIcon` examples: `rules/api-lucide-compatibility.md`
- Quick starts, install docs, or README snippets: `rules/docs-quickstart-and-examples.md`
- Release, changesets, or monorepo workflow: `rules/repo-release-and-changesets.md`

### Step 5: Validate before finishing

- Commands match the package or monorepo root workflow
- Public import paths exist in `packages/blode-icons-react/package.json`
- Examples use valid module shapes: named exports from the root, default exports from `./icons/*`
- `DynamicIcon` examples use real export keys from `dynamicIconImports`
- User-facing package changes include a changeset before merge

## Guardrails

- Do not answer package-specific requests with `lucide-react` imports unless the task is explicitly about migration comparison.
- Do not recommend internal `src/*` or `dist/*` imports as public API.
- Do not assume every icon has a Lucide alias; only the mapped subset does.
- Do not suggest `npm run release` as a docs deployment path. It only builds `blode-icons-react` and publishes via Changesets.
