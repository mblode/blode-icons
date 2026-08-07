import { isValidIconName } from "@/lib/icon-source";
import { readIconSource } from "@/lib/icon-source-server";

/**
 * Batched sibling of `/api/icons/[icon]/svg`.
 *
 * The grid needs a screenful of icons at once. Asking for them one at a time
 * put ~120 requests on the wire per batch and left the grid blank until they
 * landed. This returns the whole batch in one response.
 */

// The grid asks in batches of 120. The cap keeps a hand-written query string
// from turning into an unbounded disk read.
const MAX_NAMES = 200;

export async function GET(request: Request) {
  const names = new URL(request.url).searchParams.get("names");

  if (!names) {
    return Response.json({ error: "Missing names" }, { status: 400 });
  }

  const requested = names.split(",").filter(Boolean);

  if (requested.length > MAX_NAMES) {
    return Response.json(
      { error: `Too many names, limit is ${MAX_NAMES}` },
      { status: 400 }
    );
  }

  if (!requested.every(isValidIconName)) {
    return Response.json({ error: "Invalid icon name" }, { status: 400 });
  }

  const sources = await Promise.all(
    requested.map((name) => readIconSource(name, "svg"))
  );

  const markupBySlug: Record<string, string> = {};
  for (const [index, source] of sources.entries()) {
    if (source) {
      markupBySlug[requested[index]] = source;
    }
  }

  return Response.json(markupBySlug, {
    headers: { "Cache-Control": "public, max-age=0, s-maxage=31536000" },
  });
}
