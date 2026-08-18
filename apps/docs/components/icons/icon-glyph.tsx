import { cn } from "@/lib/utils";

/**
 * The five sizes the detail page samples. Written as literal class strings
 * because Tailwind scans source text: a computed `size-${n}` would not exist
 * in the stylesheet.
 *
 * The source SVGs carry `width="24" height="24"`, and a CSS width beats a
 * presentation attribute, so setting the size on the child is enough.
 */
const SIZE_CLASS = {
  12: "size-3 [&_svg]:size-3",
  16: "size-4 [&_svg]:size-4",
  20: "size-5 [&_svg]:size-5",
  24: "size-6 [&_svg]:size-6",
  32: "size-8 [&_svg]:size-8",
} as const;

export type GlyphSize = keyof typeof SIZE_CLASS;

export const GLYPH_SIZES: GlyphSize[] = [12, 16, 20, 24, 32];

export const IconGlyph = ({
  className,
  markup,
  size = 24,
}: {
  className?: string;
  /** Raw SVG from `src/icons-svg`. Null renders the placeholder box. */
  markup: string | null;
  size?: GlyphSize;
}) => {
  if (!markup) {
    return (
      <div
        aria-hidden="true"
        className={cn("rounded bg-muted/40", SIZE_CLASS[size], className)}
      />
    );
  }

  return (
    // This repo's own `src/icons-svg` files, never user input. Inlined rather
    // than assigned in an effect so the markup is in the server HTML: the grid
    // used to stay blank until the bundle booted.
    <div
      className={cn("shrink-0", SIZE_CLASS[size], className)}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
};
