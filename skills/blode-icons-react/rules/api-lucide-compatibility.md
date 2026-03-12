---
title: Keep Lucide Compatibility Claims Exact
impact: CRITICAL
tags: lucide, dynamic-icon, api
---

## Keep Lucide Compatibility Claims Exact

Blode Icons React intentionally supports Lucide-style usage, but the compatibility layer is generated from a mapping file and the wrapper implementation. Do not overstate what is compatible.

**Incorrect (file-name keys and unverified prop claims):**

```tsx
import { DynamicIcon } from "blode-icons-react/dynamic"

<DynamicIcon name="airplane" absoluteStrokeWidth />
```

**Correct (real export keys and verified wrapper props):**

```tsx
import { Search, SearchIcon } from "blode-icons-react"
import { DynamicIcon } from "blode-icons-react/dynamic"

<Search size={20} />
<SearchIcon color="red" strokeWidth={1.5} />
<DynamicIcon name="SearchIcon" size={24} />
```

Apply these rules:

- Use Lucide-style aliases only when the mapped subset actually exposes them
- Use full `*Icon` exports for the complete library naming scheme
- Treat `DynamicIcon` names as keys from `dynamicIconImports`, such as `Search`, `SearchIcon`, or `ChevronDownIcon`
- Do not claim special `absoluteStrokeWidth` behavior unless the wrapper implementation is updated to support it
