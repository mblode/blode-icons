---
title: Follow Root-Level Release Workflow
impact: HIGH
tags: release, changesets, monorepo
---

## Follow Root-Level Release Workflow

This repo is a Turborepo monorepo. Package work is coordinated from the root, and publishing behavior is narrower than the repo structure makes it look.

**Incorrect (package-local workflow and missing versioning step):**

```bash
cd packages/blode-icons-react
npm run release
```

**Correct (root-level workflow with explicit versioning):**

```bash
npm run build
npm run check:types
npm run changeset
```

Use these repo rules:

- Run repo commands from the repository root
- Create a changeset for user-facing changes to `packages/blode-icons-react`
- Remember that `npm run release` only builds `blode-icons-react` before publishing
- Do not describe the release command as a docs build or docs deploy step
