/**
 * Glide for the share cards.
 *
 * Rule 12 of `blode-co/apps/web/.claude/knowledge/zone-conventions.md`: every
 * app in the fleet renders Glide, and this zone was the last one still shipping
 * an off-brand typeface (Geist) on its OG image.
 *
 * These are static TTF cuts instanced from `app/fonts/glide-variable.woff2` at
 * wght 400 and 600, then subset to Latin-1 plus punctuation. Satori, which
 * `next/og` renders through, decodes neither WOFF2 nor variable axes: handed the
 * variable file it silently falls back to its own bundled font, so the card
 * looks fine in CI and wrong in the feed. Base64 JSON rather than a file read
 * because that is how this app already ships font data to the edge.
 */

interface OgFont {
  data: Buffer;
  name: "Glide";
  style: "normal";
  weight: 400 | 600;
}

export const loadGlideFonts = async (): Promise<OgFont[]> => {
  const [{ base64Font: regular }, { base64Font: semibold }] = await Promise.all(
    [
      import("./glide-400-ttf.json").then((mod) => mod.default || mod),
      import("./glide-600-ttf.json").then((mod) => mod.default || mod),
    ]
  );

  return [
    {
      data: Buffer.from(regular, "base64"),
      name: "Glide",
      style: "normal",
      weight: 400,
    },
    {
      data: Buffer.from(semibold, "base64"),
      name: "Glide",
      style: "normal",
      weight: 600,
    },
  ];
};
