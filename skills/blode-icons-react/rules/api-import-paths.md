---
title: Use Only Public Import Paths
impact: CRITICAL
tags: imports, exports, package-surface
---

## Use Only Public Import Paths

`blode-icons-react` exposes a small public surface. Docs, examples, and consuming code should stay on that surface instead of reaching into generated files.

**Incorrect (private paths and wrong module shapes):**

```tsx
import { AirplaneIcon } from "blode-icons-react/icons/airplane"
import { SearchIcon } from "blode-icons-react/dist/all-icons"
import { DynamicIcon } from "blode-icons-react/src/dynamic"
```

**Correct (use exported entrypoints and module shapes):**

```tsx
import { SearchIcon, type LucideProps } from "blode-icons-react"
import AirplaneIcon from "blode-icons-react/icons/airplane"
import { DynamicIcon } from "blode-icons-react/dynamic"
import dynamicIconImports from "blode-icons-react/dynamicIconImports"
```

Use these import rules:

- Root entrypoint for named icon exports and type exports
- `blode-icons-react/icons/<kebab-name>` for per-icon default imports only
- `blode-icons-react/dynamic` for `DynamicIcon`
- `blode-icons-react/dynamicIconImports` only when the raw generated map is required
- Never document `src/*` or `dist/*` imports as public API
