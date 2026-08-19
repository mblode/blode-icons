---
"blode-icons-react": major
---

Release 1.0.

The package is a drop-in replacement for Lucide, so its public surface is Lucide's: the component names, the props, and the `DynamicIcon` lookup are all fixed by what they stand in for. There is no API design left to settle, and staying on 0.x communicated hesitancy rather than instability.

This release carries the two corrections that make that surface honest, and both are breaking:

- The 85 `-filled` exports that rendered outline art are gone, along with their entries in `DynamicIcon`'s name union.
- `strokeWidth` reaches the artwork on the 1,788 outline icons that previously ignored it. 74 icons whose source art mixes stroke widths keep their authored values, because scaling them to a single width would flatten the drawing.

Both belong in the release that fixes the API rather than in one that follows it.
