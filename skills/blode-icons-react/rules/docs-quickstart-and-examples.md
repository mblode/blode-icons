---
title: Keep Quick Starts Short and Copyable
impact: HIGH
tags: docs, quickstart, readme
---

## Keep Quick Starts Short and Copyable

The fastest path through the docs should be a valid install command plus a minimal working import. Readers should not have to infer the correct package, export name, or module shape.

**Incorrect (generic or stale onboarding examples):**

```text
npm install lucide-react

import { AirplaneIcon } from "blode-icons-react/icons/airplane"
```

**Correct (package-first quick start):**

```text
npm install blode-icons-react

import { SearchIcon } from "blode-icons-react"

export default function App() {
  return <SearchIcon size={20} />
}
```

When editing docs or READMEs:

- Default to the `npm install blode-icons-react` quick start
- Add `pnpm`, `yarn`, or `bun` variants only when the UI or context calls for them
- Prefer one short valid component example over a long feature dump
- Keep install snippets in sync with `apps/docs/components/install-tabs.tsx` and usage snippets in sync with `apps/docs/components/getting-started.tsx`
