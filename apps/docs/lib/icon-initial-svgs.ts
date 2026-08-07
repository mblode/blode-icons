import "server-only";
import { PAGE_SIZE } from "@/lib/icon-grid";
import { filterIconsByStyle, searchIcons } from "@/lib/icon-search";
import { readIconSource } from "@/lib/icon-source-server";

/**
 * The markup for the first batch of cells, read off disk at build time.
 *
 * The grid used to fetch every icon from `/api/icons/[icon]/svg` once its cell
 * entered the viewport, which meant ~120 requests fired on first paint and the
 * whole grid sat empty until they came back. Reading them here puts the first
 * screen in the initial HTML instead, so it costs zero requests.
 *
 * Only the first batch. All 4,193 icons are 17MB on disk, so the full set can
 * never ship in the document; batches past the first come from the batched
 * route, which is one request per batch rather than one per icon.
 */
export const getInitialIconSvgs = async (): Promise<Record<string, string>> => {
  "use cache";

  const slugs = filterIconsByStyle(searchIcons(""), "OUTLINE")
    .slice(0, PAGE_SIZE)
    .map((doc) => doc.slug);

  const sources = await Promise.all(
    slugs.map((slug) => readIconSource(slug, "svg"))
  );

  const markupBySlug: Record<string, string> = {};
  for (const [index, source] of sources.entries()) {
    if (source) {
      markupBySlug[slugs[index]] = source;
    }
  }

  return markupBySlug;
};
