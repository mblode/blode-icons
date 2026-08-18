/**
 * Normalise the SVG sources: five encoding passes over `icons-svg/`.
 *
 * The sources are Figma exports that accumulated encoding noise nobody chose —
 * stroke widths left behind by a scaling transform (`1.995`, `2.22222`), roots
 * missing `width`/`height`, a `style` attribute repeating a presentation
 * attribute that is already there, 5dp coordinates the build's own SVGO config
 * says should be 4dp, and one circle drawn three different ways. None of it is
 * design. All of it shows up as noise in every diff and every measurement.
 *
 * Steps 1-4 are *encoding* changes: the ink must not move at all. Step 5 is the
 * one that touches geometry, and it is gated separately.
 *
 * ## The safety net
 *
 * Every step verifies, before a byte is written, that the drawing is the same
 * drawing. Verification runs through icon-forge (`parseIconSvg` → `parsePath` →
 * `fingerprint`): each subpath is resampled to 48 arc-length-spaced points,
 * denormalised back to absolute user units, and matched greedily against the
 * before-state's subpaths. The reported number is the worst absolute coordinate
 * displacement over every point of every subpath, in user units on the 24 grid.
 *
 * `distance(fingerprint(before), fingerprint(after))` is reported alongside it
 * because the brief asks for it, but it is the *weaker* of the two: it is
 * position-, scale- and rotation-invariant, so a shape translated 3px across
 * the canvas still scores 0. The point displacement is what actually holds the
 * line, and it is what the gate compares.
 *
 * A file that fails its gate is dropped from the pass and listed. The tolerance
 * is a property of the step, fixed here from arithmetic, never widened in
 * response to a failure.
 *
 * ## Only tracked files
 *
 * `icons-svg/` also holds in-flight icons that are not committed yet. Rewriting
 * those would mix a mechanical pass into unreviewed work and make it
 * unreviewable. The file list comes from `git ls-files`, and nothing else is
 * touched.
 *
 * ## Running it
 *
 * Needs a local icon-forge checkout, and runs under `tsx` because icon-forge is
 * TypeScript source (Node's type stripping cannot resolve its `.js` specifiers
 * back to `.ts` files).
 *
 *   FORGE_SRC=../../../icon-forge npx tsx scripts/normalise-icons.mts --step 1
 *   FORGE_SRC=../../../icon-forge npx tsx scripts/normalise-icons.mts --step 1 --write
 *
 *   --step N     run one step (1-5). Repeatable. Default: 1,2,3,4.
 *   --write      actually write. Without it this is a dry run.
 *   --ceiling N  step 5 only: the fingerprint distance within which two
 *                encodings are candidates. Default 0.06, icon-forge's own
 *                clustering threshold.
 *   --move N     step 5 only: user units the ink may travel in a swap that is
 *                not an exact re-encoding. Default 0: exact only. Above 0 this
 *                is a redraw, so pair it with --sheet and look at the result.
 *   --sheet P    step 5 only: write a before/after contact sheet to P.
 *   --json       machine-readable summary on stdout.
 *
 * Steps are independent and idempotent, so they can be run and committed one at
 * a time, in order.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

import { optimize } from "svgo";
import type { Config } from "svgo";

const ROOT = path.join(import.meta.dirname, "..");
const SVG_DIR = "icons-svg";

// ─── icon-forge ──────────────────────────────────────────────────────────────

/** The slice of icon-forge's public API this script uses. */
interface Forge {
  distance: (a: Fingerprint, b: Fingerprint) => number;
  fingerprint: (sp: Subpath) => Fingerprint;
  parseIconSvg: (svg: string) => { d: string }[];
  parsePath: (d: string) => Subpath[];
  sheet: (svgs: string[], opts?: { cols?: number }) => Promise<Buffer>;
}

interface Fingerprint {
  bbox: { x0: number; x1: number; y0: number; y1: number };
  norm: [number, number][];
  size: number;
}

/** icon-forge's `Segment`: a line, a cubic or an arc, in absolute coordinates. */
interface Segment {
  p: number[];
  t: "A" | "C" | "L";
}

interface Subpath {
  closed: boolean;
  segs: Segment[];
  start: [number, number];
}

const forgeSrc = path.resolve(
  ROOT,
  process.env.FORGE_SRC ?? "../../../icon-forge"
);
const forgeEntry = path.join(forgeSrc, "src", "index.ts");
if (!fs.existsSync(forgeEntry)) {
  throw new Error(
    `No icon-forge checkout at ${forgeSrc}. Set FORGE_SRC to point at one.`
  );
}
const forge = (await import(forgeEntry)) as Forge;

// ─── geometry comparison ─────────────────────────────────────────────────────

type Point = [number, number];

interface Traced {
  /** Whether the subpath ends in a `Z`. Not recoverable from the points: a
   *  subpath whose last point lands on its first draws a join when closed and
   *  two caps when open, which for a stroked corner is a visible notch. */
  closed: boolean;
  fp: Fingerprint;
  /** 48 arc-length-spaced points, back in absolute user units. */
  poly: Point[];
  sp: Subpath;
}

/**
 * Every subpath of an icon, fingerprinted and put back in absolute user units.
 * `fingerprint` normalises position and scale away, so this undoes that: `norm`
 * is seated on the bbox centre and divided by the longer side, so
 * `p * size + centre` is the original point.
 */
const trace = (svg: string): Traced[] =>
  forge.parseIconSvg(svg).flatMap((shape) =>
    forge.parsePath(shape.d).map((sp) => {
      const fp = forge.fingerprint(sp);
      const cx = (fp.bbox.x0 + fp.bbox.x1) / 2;
      const cy = (fp.bbox.y0 + fp.bbox.y1) / 2;
      return {
        closed: sp.closed,
        fp,
        sp,
        poly: fp.norm.map(
          ([x, y]): Point => [x * fp.size + cx, y * fp.size + cy]
        ),
      };
    })
  );

const polyDelta = (a: Point[], b: Point[]): number => {
  let worst = 0;
  for (let i = 0; i < a.length; i += 1) {
    worst = Math.max(
      worst,
      Math.abs(a[i][0] - b[i][0]),
      Math.abs(a[i][1] - b[i][1])
    );
  }
  return worst;
};

interface Verdict {
  /**
   * Subpath pairs `distance` refused to compare, returning Infinity.
   *
   * Its aspect prune is discontinuous at a flat shape: `aspect` is `w/h` unless
   * `h` is exactly 0, where it is the sentinel 999. A subpath 0.0001 tall reads
   * 19,999.8, and rounding it flat drops it to 999 — a gap far past the 0.35
   * tolerance, so two shapes 0.0001 apart score infinity. Two pairs in the
   * tracked set do this (`settings-gear-3`, `vibe-coding-bird`). The
   * displacement measures them correctly, which is why it is the gate.
   */
  declined: number;
  /** Worst absolute point displacement, in user units on the 24 grid. */
  displacement: number;
  /** Worst finite `distance(fingerprint(before), fingerprint(after))`. */
  distance: number;
}

const FAILED: Verdict = {
  declined: 0,
  displacement: Number.POSITIVE_INFINITY,
  distance: Number.POSITIVE_INFINITY,
};

/**
 * Compare two renderings of the same icon, subpath by subpath.
 *
 * Subpaths are paired greedily by point displacement rather than by index,
 * because SVGO merges sibling `<path>` elements and converts `<line>` to
 * `<path>`: the subpaths survive, their grouping into elements does not. A
 * subpath count that changes is an unconditional failure — that is a shape
 * appearing or disappearing.
 *
 * Both numbers come off the same pairing so they describe the same claim. The
 * displacement is the one the gate compares; `distance` is reported beside it
 * because it is the number the house tooling speaks in, but it folds position,
 * scale and rotation away, so on its own it would pass a shape moved 3px.
 */
const compare = (before: string, after: string): Verdict => {
  const a = trace(before);
  const b = trace(after);
  if (a.length !== b.length) {
    return FAILED;
  }
  const taken = new Set<number>();
  const worst: Verdict = { declined: 0, displacement: 0, distance: 0 };
  for (const one of a) {
    let best = Number.POSITIVE_INFINITY;
    let bestAt = -1;
    for (let j = 0; j < b.length; j += 1) {
      if (taken.has(j)) {
        continue;
      }
      const d = polyDelta(one.poly, b[j].poly);
      if (d < best) {
        best = d;
        bestAt = j;
      }
    }
    taken.add(bestAt);
    // A seam that stops being a seam moves no point but does change what is
    // drawn there, so it fails outright rather than scoring a displacement.
    if (one.closed !== b[bestAt].closed) {
      return FAILED;
    }
    worst.displacement = Math.max(worst.displacement, best);
    const d = forge.distance(one.fp, b[bestAt].fp);
    if (Number.isFinite(d)) {
      worst.distance = Math.max(worst.distance, d);
    } else {
      worst.declined += 1;
    }
  }
  return worst;
};

// ─── steps ───────────────────────────────────────────────────────────────────

interface Step {
  /** Maximum point displacement, in user units, this step may cause. */
  budget: number;
  n: number;
  title: string;
  /** `undefined` = this file is out of scope for the step. */
  apply: (svg: string, rel: string) => string | undefined;
}

/**
 * Step 1 — snap transform-residue stroke widths back to the 2px base.
 *
 * These are what a Figma scale transform leaves behind when it is baked into
 * the geometry: 2 × 0.9975, 2 × 0.95002, 2 × 1.11111. They are not tiers. The
 * real thinning tiers are documented in DESIGN.md, and `1.8` in particular is a
 * deliberate optical adjustment for an interior mark inside a 2px container —
 * so it, and every other value in that table, is left exactly alone. Only these
 * six literals are touched, listed rather than matched by a rule, because a
 * rule like "within 0.25 of 2" would also eat the deliberate `1.9` and `2.2`.
 */
const RESIDUE_WIDTHS = [
  "1.995",
  "1.90004",
  "1.90026",
  "1.92857",
  "2.05556",
  "2.22222",
];

const step1: Step = {
  budget: 0,
  n: 1,
  title: "snap transform-residue stroke widths to 2",
  apply(svg) {
    let out = svg;
    for (const w of RESIDUE_WIDTHS) {
      out = out.replaceAll(`stroke-width="${w}"`, 'stroke-width="2"');
    }
    return out === svg ? undefined : out;
  },
};

/**
 * Step 2 — give every root the same three attributes.
 *
 * 1,052 of the tracked files carry no `width`/`height` at all, and the rest are
 * inconsistent about where the attributes sit. The values are inert downstream:
 * `createLucideIcon` passes `width: size, height: size` into the component and
 * SVGR emits `{...props}` last, so the prop always wins. This is about the
 * source reading the same way twice, not about what renders.
 *
 * Only the icons already on a 24×24 viewBox are in scope. The 47 that are not
 * need the *drawing* scaled, which is a redraw and a separate reviewed pass;
 * rewriting the attribute alone would silently resize them.
 */
const SVG_OPEN = /<svg\b[^>]*>/;
const HOUSE_VIEWBOX = 'viewBox="0 0 24 24"';

const setAttr = (tag: string, name: string, value: string): string => {
  const re = new RegExp(`\\s${name}="[^"]*"`);
  return re.test(tag)
    ? tag.replace(re, ` ${name}="${value}"`)
    : tag.replace(/^<svg/, `<svg ${name}="${value}"`);
};

const step2: Step = {
  budget: 0,
  n: 2,
  title: "re-emit roots as 24×24",
  apply(svg) {
    const open = svg.match(SVG_OPEN)?.[0];
    if (!open?.includes(HOUSE_VIEWBOX)) {
      return; // off-grid viewBox: needs the art scaled, not the attribute set.
    }
    let tag = setAttr(open, "width", "24");
    tag = setAttr(tag, "height", "24");
    return tag === open ? undefined : svg.replace(open, tag);
  },
};

/**
 * Step 3 — drop the `style` attribute that repeats a presentation attribute.
 *
 * Figma emits `style="fill:currentColor;fill-opacity:1;"` beside the
 * `fill="currentColor"` it already wrote. `build.mts` deletes all three forms
 * from the generated JSX (`stripRedundantCurrentColorStyles`), so this is only
 * moving an existing deletion upstream to where the diff can see it.
 *
 * Checked, not assumed: all 2,546 elements carrying the fill form, all 700
 * carrying the stroke form and all 41 carrying the combined form already carry
 * the matching attribute, so removing the style changes nothing that renders.
 * `style="fill:white;fill-opacity:1;"` is *not* in this set — white is not
 * `currentColor` and build.mts leaves it alone — so neither does this.
 */
const REDUNDANT_STYLES = [
  'style="fill:currentColor;fill-opacity:1;stroke:currentColor;stroke-opacity:1;"',
  'style="fill:currentColor;fill-opacity:1;"',
  'style="stroke:currentColor;stroke-opacity:1;"',
];

const step3: Step = {
  budget: 0,
  n: 3,
  title: "strip redundant currentColor style attributes",
  apply(svg) {
    let out = svg;
    for (const s of REDUNDANT_STYLES) {
      out = out.replaceAll(` ${s}`, "").replaceAll(s, "");
    }
    return out === svg ? undefined : out;
  },
};

/**
 * Step 4 — run the build's own SVGO config over the sources.
 *
 * `svgo.json` has only ever run inside SVGR at build time, so the sources still
 * hold the 5dp coordinates its `floatPrecision: 4` was written to round.
 *
 * Three overrides, and none of them is cosmetic.
 *
 * `makeArcs` rewrites cubics as elliptical arcs, and icon-forge's `flatten`
 * falls back to an arc's *chord*: with arcs on, `safari.svg`'s outer ring
 * measures 17.07 user units away from where it actually is, and every keyline,
 * cohort and census number downstream is measured off that. Arcs are fine in
 * the built component, which a browser renders; they are not fine in the file
 * the audit reads. `straightCurves` and `convertToQ` are off for a related
 * reason — they replace a curve with a different primitive, which is a redraw
 * the gate would reject anyway.
 *
 * `removeUseless` drops the trailing `z` from a subpath whose last point
 * already coincides with its first. For a fill that is genuinely useless. For a
 * *stroke* it is not: closed, the seam is one `stroke-linejoin`; open, it is
 * two `stroke-linecap` ends butted together, which on a corner is a visible
 * notch. It reaches 672 stroked subpaths across 497 tracked files here —
 * `anchor-1` among them — so it is off, and the gate rejects a closed/open flip
 * outright rather than scoring it, since no point moves when it happens.
 *
 * The tolerance. This is the one step that cannot be a zero-move operation, and
 * it would be dishonest to pretend otherwise: rounding a coordinate is what it
 * was asked to do. SVGO's `convertPathData` rounds with an error tolerance of
 * 10^-floatPrecision = 1e-4 user units per coordinate, and arc-length
 * resampling redistributes that along a subpath, so the measured displacement
 * runs a little above the per-coordinate figure — worst case 4.6e-4 over the
 * tracked set. The budget is 1e-3: above the measured worst case, and still two
 * orders of magnitude below the 0.1 user units that is one pixel at 24px.
 * Anything above it is not rounding, it is a redraw, and gets dropped.
 */
const svgoConfig = (() => {
  const raw = JSON.parse(
    fs.readFileSync(path.join(ROOT, "svgo.json"), "utf-8")
  ) as {
    filePath?: { exclude?: string[] };
    plugins: [{ params: { overrides: Record<string, unknown> } }];
  };
  // `filePath` is SVGR's exclusion mechanism, not SVGO's; it is honoured here
  // by skipping the file rather than by handing SVGO an option it ignores.
  const excluded = new Set(raw.filePath?.exclude);
  delete raw.filePath;
  // `moveElemsAttrsToGroup` hoists a `fill` or `stroke` shared by every child
  // onto their `<g>`. A browser inherits it; icon-forge's `parseIconSvg` scans
  // for shape elements and never walks a group, so every hoisted child reads
  // back as unfilled and unstroked. It reached 11 icons here — `red-dot-award`,
  // `grok`, `sun-high`, `angularjs` among them — turning them invisible to the
  // fill and stroke-width halves of every measurement. Same trade as `makeArcs`
  // above: legal SVG, wrong source of truth.
  // `mergePaths` collapses sibling `<path>` elements that share presentation
  // attributes into one. It moves no ink, and that is exactly why it is wrong
  // here: lint reasons about *elements*. `density` counts them against the
  // set's median of 3-4, and `gap` compares them pairwise. Merging took the set
  // from 8,865 drawable elements to 6,082 across 1,186 icons, which reported as
  // density 53 -> 9 and gap 783 -> 428 — a 45% fall in gap findings with not one
  // shape moved. Those are measurements dissolving, not icons improving, and a
  // source file should keep the structure its author drew.
  Object.assign(raw.plugins[0].params.overrides, {
    mergePaths: false,
    moveElemsAttrsToGroup: false,
  });
  Object.assign(raw.plugins[0].params.overrides.convertPathData as object, {
    convertToQ: false,
    makeArcs: false,
    removeUseless: false,
    straightCurves: false,
  });
  return { config: raw as unknown as Config, excluded };
})();

const step4: Step = {
  budget: 1e-3,
  n: 4,
  title: "run SVGO over the sources",
  apply(svg, rel) {
    if (svgoConfig.excluded.has(path.basename(rel))) {
      return;
    }
    // SVGO returns no trailing newline; every source had one, and 4,168 files
    // losing it at once is a diff nobody asked for.
    const out = `${optimize(svg, svgoConfig.config).data.trimEnd()}\n`;
    return out === svg ? undefined : out;
  },
};

// ─── step 5: canonicalise duplicate encodings ────────────────────────────────

/**
 * Step 5 — where the set draws one shape two ways, draw it one way.
 *
 * The `coin-*` family is the case that names this step: the same r=9 circle at
 * (12,12), written clockwise from (21,12) in four icons and anticlockwise from
 * (12,21) in four more. A string compare sees two unrelated paths. A
 * fingerprint sees distance 0, because it folds traversal direction and start
 * point away — which is exactly the pair a human would call "the same circle".
 *
 * A candidate group is a set of elements that share a bounding box to 2dp and
 * whose distinct encodings all sit within `--ceiling` of each other. Requiring
 * the shared box is what makes the swap safe to do mechanically: the medoid
 * needs no transform to stand in for a member, so nothing can move except the
 * shape's own interior, and the swap is provably placement-neutral. Groups that
 * cluster across *different* boxes are a real population (they need the medoid
 * transformed into each member's frame) and are deliberately out of scope here.
 *
 * The medoid is the encoding with the smallest total distance to the others,
 * ties broken by how many elements already use it and then by the string, so
 * the choice is deterministic and biased toward the form already in the
 * majority.
 *
 * ## Why the group is a candidate and not a decision
 *
 * `distance` folds the square's symmetries away, so at a shared bounding box it
 * reads a mark and *the same mark turned a quarter* as distance 0. Substituting
 * the medoid's path data then turns the mark — a redraw, dressed as a
 * re-encoding. It is not rare: gated at 0 movement, 198 of the 279 groups fail
 * on exactly this, `unblock` and `window-app-filled` among them at distance
 * 1e-16 and 2 to 3.5 user units of actual travel.
 *
 * So the swap is decided by `sameInk`, which compares nodes and control points
 * literally under every start node and both windings — the exact statement of
 * "the same circle drawn the other way", with no tolerance and no sampling
 * floor. That is the default, and it is the whole of step 5 as run here.
 *
 * `--move` opens the door to the rest: swaps that are not exact are admitted up
 * to that many user units of Hausdorff movement. That is a redraw, so it is off
 * by default and wants `--sheet` and a pair of eyes.
 */
const BOX_KEY_DP = 2;

interface Element {
  box: string;
  d: string;
  ink: Traced;
  rel: string;
}

/**
 * Whether two subpaths are the *same* drawing written down differently.
 *
 * "Differently" means one thing only: started at another node, or wound the
 * other way. Everything else — a node moved, a handle retuned, a quarter turn —
 * is a redraw. So this compares nodes and control points literally, once per
 * (start node × direction), and there is no tolerance to tune and no sampling
 * floor: 4dp source coordinates either agree exactly or they do not.
 *
 * An arc is never equal to anything here. Reversing one means flipping its
 * sweep flag, and icon-forge's own geometry flattens arcs to their chord, so
 * neither the swap nor the check could be trusted. There are none in the
 * sources after step 4 anyway — `makeArcs` is off for the same reason.
 */
const EPS = 1e-9;

const sameNode = (a: number[], b: number[]): boolean =>
  a.length === b.length && a.every((v, i) => Math.abs(v - b[i]) < EPS);

/** Node points of a subpath: `pts[i]` is where `segs[i]` starts. */
const ringOf = (sp: Subpath): { pts: Point[]; segs: Segment[] } | null => {
  if (sp.segs.some((s) => s.t === "A")) {
    return null;
  }
  const pts: Point[] = [[...sp.start]];
  for (const s of sp.segs) {
    pts.push([s.p.at(-2) as number, s.p.at(-1) as number]);
  }
  // A closed subpath whose last segment lands back on the start carries a
  // duplicate node; dropping it makes rotation a plain index shift.
  if (sp.closed && sameNode(pts.at(-1) as number[], pts[0])) {
    pts.pop();
    return { pts, segs: sp.segs.slice(0, pts.length) };
  }
  return { pts, segs: sp.segs };
};

/** One segment as [fromX, fromY, ...controls, toX, toY], direction-normalised. */
const legOf = (
  from: Point,
  seg: Segment,
  reverse: boolean
): number[] | null => {
  if (seg.t === "L") {
    const to: Point = [seg.p[0], seg.p[1]];
    return reverse ? [...to, ...from] : [...from, ...to];
  }
  const [c1x, c1y, c2x, c2y, tx, ty] = seg.p;
  return reverse
    ? [tx, ty, c2x, c2y, c1x, c1y, ...from]
    : [...from, c1x, c1y, c2x, c2y, tx, ty];
};

const legsOf = (
  ring: { pts: Point[]; segs: Segment[] },
  reverse: boolean
): number[][] => {
  const legs = ring.segs.map((seg, i) => legOf(ring.pts[i], seg, reverse));
  return (reverse ? legs.toReversed() : legs) as number[][];
};

const sameInk = (a: Subpath, b: Subpath): boolean => {
  if (a.closed !== b.closed) {
    return false;
  }
  const ra = ringOf(a);
  const rb = ringOf(b);
  if (!(ra && rb) || ra.segs.length !== rb.segs.length) {
    return false;
  }
  const legsA = legsOf(ra, false);
  const n = legsA.length;
  const starts = a.closed ? n : 1;
  for (const reverse of [false, true]) {
    const legsB = legsOf(rb, reverse);
    for (let r = 0; r < starts; r += 1) {
      if (legsA.every((leg, i) => sameNode(leg, legsB[(i + r) % n]))) {
        return true;
      }
    }
  }
  return false;
};

/** Distance from a point to a line segment. */
const toSegment = (
  [px, py]: Point,
  [ax, ay]: Point,
  [bx, by]: Point
): number => {
  const dx = bx - ax;
  const dy = by - ay;
  const len = dx * dx + dy * dy;
  const t =
    len === 0
      ? 0
      : Math.min(1, Math.max(0, ((px - ax) * dx + (py - ay) * dy) / len));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
};

const oneWay = (from: Point[], to: Point[]): number => {
  let worst = 0;
  for (const p of from) {
    let near = Number.POSITIVE_INFINITY;
    for (let i = 1; i < to.length; i += 1) {
      near = Math.min(near, toSegment(p, to[i - 1], to[i]));
    }
    worst = Math.max(worst, near);
  }
  return worst;
};

/**
 * How far the ink moves if `b`'s path data is written where `a`'s was: the
 * symmetric Hausdorff distance between the two outlines, in user units.
 *
 * Measured point-to-*segment* rather than point-to-point, and in both
 * directions. That makes it agnostic to start node and winding — the two things
 * that differ between two encodings of one shape — and to nothing else. It is
 * the whole difference from `distance`, which also minimises over the square's
 * rotations and reflections and so cannot tell a re-encoding from a quarter
 * turn.
 *
 * It has a floor: both outlines are 48-point polylines, so a curve is compared
 * against its own chords and an exact match still scores the chord sagitta —
 * 0.02 user units for the largest thing in the set, the r=9 coin ring, and less
 * for everything smaller. That floor is why `--move` defaults to 0.05 rather
 * than 0. The population it has to stay clear of starts at 0.2, so there is an
 * order of magnitude between the floor and the nearest real difference.
 */
const inkDelta = (a: Traced, b: Traced): number => {
  if (a.closed !== b.closed) {
    return Number.POSITIVE_INFINITY;
  }
  return Math.max(oneWay(a.poly, b.poly), oneWay(b.poly, a.poly));
};

interface Group {
  box: string;
  medoid: string;
  members: Element[];
  spread: number;
}

const boxKey = (f: Fingerprint): string =>
  [f.bbox.x0, f.bbox.y0, f.bbox.x1, f.bbox.y1]
    .map((v) => v.toFixed(BOX_KEY_DP))
    .join(",");

/** A dash pattern is phased from the subpath's start node and runs in its
 *  traversal direction, so for these eight the start node and the winding are
 *  visible, and a re-encoding is not one. */
const PHASE_SENSITIVE = /stroke-dasharray|marker-/;

const collect = (files: string[]): Element[] => {
  const out: Element[] = [];
  for (const rel of files) {
    const svg = fs.readFileSync(path.join(ROOT, rel), "utf-8");
    if (PHASE_SENSITIVE.test(svg)) {
      continue;
    }
    for (const shape of forge.parseIconSvg(svg)) {
      const subpaths = forge.parsePath(shape.d);
      // Multi-subpath elements are skipped: swapping one would rewrite several
      // shapes at once on the strength of a single-shape match.
      if (subpaths.length !== 1) {
        continue;
      }
      const [ink] = trace(`<path d="${shape.d}"/>`);
      out.push({ box: boxKey(ink.fp), d: shape.d, ink, rel });
    }
  }
  return out;
};

const groupsFor = (elements: Element[], ceiling: number): Group[] => {
  const byBox = new Map<string, Element[]>();
  for (const el of elements) {
    const bucket = byBox.get(el.box);
    if (bucket) {
      bucket.push(el);
    } else {
      byBox.set(el.box, [el]);
    }
  }
  const groups: Group[] = [];
  for (const [box, atBox] of byBox) {
    const forms = [...new Set(atBox.map((m) => m.d))];
    if (forms.length < 2) {
      continue;
    }
    const reps = forms.map((d) => atBox.find((m) => m.d === d) as Element);
    // A bounding box is not a cluster: 3,3,21,21 holds the r=9 circle, a
    // rounded square, a shield and a dozen others, so requiring every form at a
    // box to agree finds nothing at all — the coin circles included. Cluster
    // inside the box instead, greedily, the way `extract.ts` does.
    const unplaced = new Set(reps.keys());
    while (unplaced.size > 0) {
      const [seed] = unplaced;
      unplaced.delete(seed);
      const cluster = [seed];
      for (const i of new Set(unplaced)) {
        if (
          cluster.every(
            (j) => forge.distance(reps[i].ink.fp, reps[j].ink.fp) <= ceiling
          )
        ) {
          cluster.push(i);
          unplaced.delete(i);
        }
      }
      if (cluster.length < 2) {
        continue;
      }
      const forced = new Set(cluster.map((i) => reps[i].d));
      const members = atBox.filter((m) => forced.has(m.d));
      const uses = new Map<string, number>();
      for (const m of members) {
        uses.set(m.d, (uses.get(m.d) ?? 0) + 1);
      }
      let spread = 0;
      for (const i of cluster) {
        for (const j of cluster) {
          spread = Math.max(
            spread,
            forge.distance(reps[i].ink.fp, reps[j].ink.fp)
          );
        }
      }
      const ranked = cluster
        .map((i) => ({
          d: reps[i].d,
          total: cluster.reduce(
            (sum, j) => sum + forge.distance(reps[i].ink.fp, reps[j].ink.fp),
            0
          ),
        }))
        .toSorted(
          (a, b) =>
            a.total - b.total ||
            (uses.get(b.d) as number) - (uses.get(a.d) as number) ||
            a.d.localeCompare(b.d)
        );
      groups.push({ box, medoid: ranked[0].d, members, spread });
    }
  }
  return groups;
};

// ─── driver ──────────────────────────────────────────────────────────────────

interface Failure extends Verdict {
  rel: string;
}

interface Result {
  changed: string[];
  held: Failure[];
  note?: string;
  step: number;
  title: string;
  worstDisplacement: number;
  worstDistance: number;
  /** See `Verdict.declined`. Reported so a silent Infinity cannot hide here. */
  declinedPairs: number;
}

const trackedSvgs = (): string[] =>
  execFileSync("git", ["ls-files", SVG_DIR], { cwd: ROOT, encoding: "utf-8" })
    .split("\n")
    .filter((line) => line.endsWith(".svg"));

/** Run one candidate edit past the gate. Returns the text to write, or null. */
const gate = (
  before: string,
  after: string,
  budget: number,
  rel: string,
  held: Failure[],
  worst: Verdict
): string | null => {
  const seen = compare(before, after);
  if (seen.displacement > budget) {
    held.push({ ...seen, rel });
    return null;
  }
  worst.displacement = Math.max(worst.displacement, seen.displacement);
  worst.distance = Math.max(worst.distance, seen.distance);
  worst.declined += seen.declined;
  return after;
};

const runEncodingStep = (
  step: Step,
  files: string[],
  write: boolean
): Result => {
  const changed: string[] = [];
  const held: Failure[] = [];
  const worst = { declined: 0, displacement: 0, distance: 0 };
  for (const rel of files) {
    const abs = path.join(ROOT, rel);
    const before = fs.readFileSync(abs, "utf-8");
    const candidate = step.apply(before, rel);
    if (candidate === undefined) {
      continue;
    }
    const ok = gate(before, candidate, step.budget, rel, held, worst);
    if (ok === null) {
      continue;
    }
    changed.push(rel);
    if (write) {
      fs.writeFileSync(abs, ok);
    }
  }
  return {
    changed,
    declinedPairs: worst.declined,
    held,
    step: step.n,
    title: step.title,
    worstDisplacement: worst.displacement,
    worstDistance: worst.distance,
  };
};

const runStep5 = async (
  files: string[],
  write: boolean,
  ceiling: number,
  move: number,
  sheetPath: string | undefined
): Promise<Result> => {
  const groups = groupsFor(collect(files), ceiling);
  const edits = new Map<string, [string, string][]>();
  const held: Failure[] = [];
  const worst = { declined: 0, displacement: 0, distance: 0 };
  const refused = new Set<string>();
  for (const g of groups) {
    const medoid = g.members.find((m) => m.d === g.medoid) as Element;
    for (const m of g.members) {
      if (m.d === g.medoid) {
        continue;
      }
      // Per swap, not per file: one member of a group failing must not drag
      // the rest of its file's swaps down with it, and a file that ends up
      // with no admissible swap left simply drops out.
      const exact = sameInk(m.ink.sp, medoid.ink.sp);
      const moved = exact ? 0 : inkDelta(m.ink, medoid.ink);
      if (!exact && moved > move) {
        if (!refused.has(`${m.rel}|${m.d}`)) {
          refused.add(`${m.rel}|${m.d}`);
          held.push({
            declined: 0,
            displacement: moved,
            distance: forge.distance(m.ink.fp, medoid.ink.fp),
            rel: m.rel,
          });
        }
        continue;
      }
      worst.displacement = Math.max(worst.displacement, moved);
      const list = edits.get(m.rel) ?? [];
      list.push([m.d, g.medoid]);
      edits.set(m.rel, list);
    }
  }
  const changed: string[] = [];
  const pairs: [string, string][] = [];
  for (const [rel, swaps] of edits) {
    const abs = path.join(ROOT, rel);
    const before = fs.readFileSync(abs, "utf-8");
    let after = before;
    for (const [from, to] of swaps) {
      after = after.replaceAll(`d="${from}"`, `d="${to}"`);
    }
    if (after === before) {
      continue;
    }
    changed.push(rel);
    pairs.push([before, after]);
    if (write) {
      fs.writeFileSync(abs, after);
    }
  }
  if (sheetPath && pairs.length > 0) {
    // Before and after alternate down the sheet, so a swap that redrew rather
    // than re-encoded shows up as a mismatched pair rather than as a number.
    const buf = await forge.sheet(pairs.flat(), { cols: 2 });
    fs.writeFileSync(sheetPath, buf);
  }
  return {
    changed,
    declinedPairs: worst.declined,
    held,
    note: `${groups.length} candidate groups at ceiling ${ceiling}; swaps admitted at up to ${move} user units of movement`,
    step: 5,
    title: "canonicalise duplicate encodings",
    worstDisplacement: worst.displacement,
    worstDistance: worst.distance,
  };
};

const argv = process.argv.slice(2);
const flag = (name: string): boolean => argv.includes(`--${name}`);
const value = (name: string): string | undefined => {
  const at = argv.indexOf(`--${name}`);
  return at === -1 ? undefined : argv[at + 1];
};
const stepNumbers = argv
  .flatMap((a, i) => (a === "--step" ? [Number(argv[i + 1])] : []))
  .filter((n) => Number.isInteger(n) && n >= 1 && n <= 5);
const selected = stepNumbers.length > 0 ? stepNumbers : [1, 2, 3, 4];
const write = flag("write");
const json = flag("json");
const ceiling = Number(value("ceiling") ?? 0.06);
const move = Number(value("move") ?? 0);
const sheetPath = value("sheet");

const files = trackedSvgs();
const untracked = execFileSync(
  "git",
  ["ls-files", "--others", "--exclude-standard", SVG_DIR],
  { cwd: ROOT, encoding: "utf-8" }
)
  .split("\n")
  .filter((line) => line.endsWith(".svg")).length;

const encodingSteps = new Map([
  [1, step1],
  [2, step2],
  [3, step3],
  [4, step4],
]);

const results: Result[] = [];
for (const n of selected) {
  const step = encodingSteps.get(n);
  results.push(
    step
      ? runEncodingStep(step, files, write)
      : await runStep5(files, write, ceiling, move, sheetPath)
  );
}

if (json) {
  process.stdout.write(
    `${JSON.stringify({ dryRun: !write, results, tracked: files.length, untrackedSkipped: untracked }, null, 2)}\n`
  );
} else {
  process.stdout.write(
    `${write ? "writing" : "dry run"} — ${files.length} tracked, ${untracked} untracked skipped\n\n`
  );
  for (const r of results) {
    process.stdout.write(
      `step ${r.step}: ${r.title}\n` +
        `  changed      ${r.changed.length}\n` +
        `  held back    ${r.held.length}\n` +
        `  worst move   ${r.worstDisplacement.toExponential(2)} user units\n` +
        `  worst dist   ${r.worstDistance.toExponential(2)}${
          r.declinedPairs > 0
            ? ` (${r.declinedPairs} pairs not comparable, see Verdict.declined)\n`
            : "\n"
        }${r.note ? `  ${r.note}\n` : ""}${r.held
          .map(
            (h) =>
              `  HELD ${h.rel} moved ${h.displacement.toPrecision(4)}, distance ${h.distance.toPrecision(4)}\n`
          )
          .join("")}\n`
    );
  }
}
