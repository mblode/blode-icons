# Design notes

Facts about the art that the code depends on, and that a reader of the code cannot recover from it.

## The 2px base and the thinning tiers

Every outline icon is drawn on a 24×24 grid with a 2px stroke. That is the base tier, and it is what `strokeWidth` means by default.

A dense glyph cannot hold the base tier everywhere. Where a small interior mark sits inside a container that is also 2px — the `L` inside `coin-lira`, the digits inside `coin-pesos` and `coin-rupees` — two adjacent 2px strokes close the light between them and the glyph reads as a blob at 16px. The interior is therefore drawn thinner on purpose. This is **optical stroke thinning**, and the thinned value is a deliberate, named tier:

| Tier | Use |
| --- | --- |
| `2` | base — every outline stroke unless something below applies |
| `1.8` | an interior mark inside a 2px container that would otherwise clog |
| `1.5`–`1.9` | the same adjustment, tuned per glyph where `1.8` was not enough |
| `0.75`, `0.5` | hairlines: text ruling, screen content, signal bars — marks that stand for detail rather than being detail |

An undocumented adjustment is indistinguishable from drift, so: these values are not drift, and a lint rule that flags "stroke width is not 2" should exempt them.

## Which icons `strokeWidth` reaches

`createLucideIcon` puts `strokeWidth` on the root `<svg>`, where children inherit it. SVGR copies any `stroke-width` from the source SVG onto the child elements, and a child presentation attribute beats an inherited one — so an icon only responds to the prop if its children carry no width of their own. `scripts/build.mts` (`stripUniformChildStrokeWidth`) strips those child attributes at generation time, **per icon and all-or-nothing**.

All-or-nothing is the whole point. Strip `coin-lira`'s 2s and leave its 1.8, and at `strokeWidth={1}` the thinned interior renders _thicker_ than the stroke it was thinning — the optical adjustment inverted. That is a worse bug than an inert prop.

An icon is stripped only when every stroked child agrees on one width and that width is the 2px base. Four populations are therefore left hardcoded:

1. **Mixed widths — 58 icons.** An optical adjustment as above. `adjust-photo`, `airpod-case`, `bubble-annotation-2`…`-6`, `bubble-dots`, `bubble-question`, `bubble-wide-annotation`, `calculator`, `circle-dots-center-2`, `circle-info`, `cloud-sync-2`, `coin-lira`, `coin-pesos`, `coin-rand`, `coin-rupees`, `coin-won`, `conductor`, `desk-lamp`, `devices-2`, `education`, `email-2-block`, `emoji-neutral`, `full-moon`, `gamecontroller`, `gamepad`, `gyroscope-sensor`, `heart-donation`, `hermes-helmet`, `line-thickness`, `math-basic`, `pan`, `password-stars`, `percent`, `phone-top-dynamic-island`, `quick-ai`, `radio`, `robot-3`, `robot-head-slop`, `scan-voice`, `server`, `sidebar`, `steering-wheel`, `steve-jobs`, `switch-voice`, `team`, `user-block`, `versus-circle`, `vibe-coding-bird`, `wallet-3`, `wifi-full`, `wifi-weak`, `window-2`, `window-app`, `window-cursor`, `write-3`.

2. **A uniform width that is not 2 — 18 icons.** The whole glyph is drawn off the base tier, so stripping would retune it at default props: it would render at 2 where the artwork asks for 0.75 or 1.8. `bananas`, `bluetooth`, `currency-pesos-filled`, `cursor-1`, `garlic`, `goat-head`, `keyboard-cable`, `keyboard-down`, `keyboard-up`, `loading-circle-filled`, `magnet`, `password`, `square-grid-circle`, `square-info`, `storage`, `surfing`, `wifi-square`, `wreath-simple`.

3. **A stroked child with no width of its own — 4 icons.** That child already inherits the prop, so the icon's widths agree at the default and diverge the moment the prop moves. Stripping would flatten a difference the artwork makes. `graduate-cap-2`, `mask`, `screen-capture`, `voice-2`.

4. **Every filled icon — 2,471 components.** Filled art is outline-expanded from a 2px stroke into a `fill`. There is no stroke left in the path data, so there is nothing for `strokeWidth` to vary; the 2px origin is baked into the outline. Passing the prop to a filled icon is inert and always will be. lucide-react has the same property for the same reason, so this is a documentation gap rather than a compatibility one.

Everything else — 1,788 outline icons — responds to the prop.

### Icons that carry `stroke-width` on the root `<svg>`

16 icons put `stroke` and `stroke-width` on the root rather than on their children: the eight `arrow-*`, `chain-link-2`, `check`, `chevron-left`, `chevron-right`, `circle-exclamation`, `info`, `layout-grid-3`, `pie-chart`. (`layout-grid-3` is a verbatim Tabler Icons file, `class="icon icon-tabler…"` and all.)

These need no handling. SVGR emits `{...props}` last in the root tag, so the prop overwrites the hardcoded root attribute, and their children carry no width to override it in turn. They already respond to `strokeWidth`, and the strip is a no-op on them by construction.

## `absoluteStrokeWidth`

`createLucideIcon` scales `strokeWidth` by `24 / size` when `absoluteStrokeWidth` is set, matching lucide-react. It reaches exactly the same icons as `strokeWidth`, for exactly the same reasons.
