---
"blode-icons-react": minor
---

Expand and verify Lucide compatibility. 579 Lucide names (canonical plus historical aliases) now import straight from the package, up from ~156.

Every pair is verified by rendering both icons and comparing them, not by matching names. Name matching alone had proposed `Rat`, `Refrigerator` and `BusFront` as aliases of a reception bell icon and would have exported all three — imports that silently render the wrong icon. Lucide names without a genuine Blode counterpart are now left unexported, so a bad import fails at build time instead. The mapping records the score behind every pair.

Also adds `absoluteStrokeWidth` prop parity with lucide-react, and richer search metadata for agent-facing discovery.
