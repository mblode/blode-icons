import { IconGlyph } from "@/components/icons/icon-glyph";
import { asset } from "@/lib/config";
import { getIconSvgs } from "@/lib/icon-detail";
import { getIconDisplayName } from "@/lib/icon-search";

/**
 * A static grid of icons that link to their detail pages.
 *
 * The search grid on the root is a client component with infinite scroll,
 * because it can hold all 2,139 icons at once. These grids are bounded — the
 * largest category is 203 — so they render on the server, in the document,
 * with no JavaScript and no requests.
 *
 * Raw anchors with `asset()`, matching the header and footer: `next/link`
 * would prefetch every visible cell, which on a 203-icon page is 203 requests
 * for a page nobody may click.
 */
export const IconLinkGrid = async ({
  labelBySlug,
  slugs,
}: {
  /** Overrides the icon name under a cell, e.g. the concept it answers. */
  labelBySlug?: Record<string, string>;
  slugs: string[];
}) => {
  const markupBySlug = await getIconSvgs(slugs);

  return (
    <ul className="grid grid-cols-2 gap-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {slugs.map((slug) => (
        <li key={slug}>
          <a
            className="group flex h-[104px] flex-col items-center justify-center overflow-hidden rounded-xl border border-border px-2 transition-colors hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
            href={asset(`/${slug}`)}
          >
            <IconGlyph
              className="transition-transform duration-150 ease-out group-hover:scale-[1.4]"
              markup={markupBySlug[slug] ?? null}
            />
          </a>
          <span className="mt-2 line-clamp-2 block text-center text-muted-foreground text-xs">
            {labelBySlug?.[slug] ?? getIconDisplayName(slug)}
          </span>
        </li>
      ))}
    </ul>
  );
};
