---
"blode-icons-react": minor
---

Add ~520 new icons from Central (now ~2,000 base icons / ~4,000 components), each with category and keyword metadata. Backfill search keywords for ~1,290 previously-untagged icons so every icon is now searchable by synonyms and use-cases (e.g. "flight" finds airplane, "delete" finds trash). Adds a `scrape` pipeline that re-syncs from centralicons.com, plus `validate` and `validate:icons-data` gates that run before builds to catch malformed SVGs, component-name collisions, and bad metadata. Documents `optimizePackageImports` for faster Next.js builds.
