---
"blode-icons-react": patch
---

Cover every icon with metadata, and give each concept one answer.

96 outline SVGs shipped with no `icons-data` record, so they were absent from category listings and unreachable by keyword search; one record (`cloud-`, a typo of `cloud`) named an icon that does not exist. Both are now filled in and both directions are checked — `validate:icons-data` fails if metadata and outline art stop covering each other exactly.

`_categories.json` carried `Vehicles` and `Vehicles & Aircrafts` as separate categories; they are merged into `Vehicles`.

New: `icons-data/_concepts.json`, a table of 114 UI concepts each mapping to exactly one canonical slug — `delete → trash-can`, `search → magnifying-glass`, `settings → settings-gear-1`. It answers "what is the icon for X?" with one icon and keeps answering with one, so the set cannot quietly grow two icons for the same idea. Validation checks that every target resolves to a real icon and that no concept has been given a second answer.
