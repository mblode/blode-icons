---
"blode-icons-react": minor
---

Make `strokeWidth` actually change the stroke.

The prop was accepted, documented, and inert: every generated component hardcoded `strokeWidth={2}` on its children, and a child presentation attribute beats the one inherited from the `<svg>` the prop lands on. The build now strips that attribute so the prop reaches the artwork — 1,788 outline icons that previously ignored it.

This is a visual change for anyone already passing `strokeWidth` and getting nothing: those icons will now render at the width they asked for instead of at 2. Rendering at the default `strokeWidth={2}` is unchanged.

The strip is per icon and all-or-nothing. 80 icons keep hardcoded widths because their strokes are optically tuned — an interior mark thinned to 1.8 so it does not clog beside a 2px container — and stripping some widths but not others would invert that adjustment at low stroke widths. `strokeWidth` also cannot reach any filled icon, whose art is outline-expanded into a `fill` with no stroke left to vary (lucide-react behaves the same way). See `DESIGN.md` for the full list and the reasoning.
