---
"blode-icons-react": patch
---

Restore the 508 lucide-react aliases. The build parsed `lucide-mapping.ts` with a regex that required a fixed key order, so when the formatter alphabetised the object keys it matched nothing and emitted zero aliases while still exiting 0. The mapping is now imported as a module, and the build fails if it yields no usable entries.
