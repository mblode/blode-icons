import type { Metadata } from "next";

import { IconGlyph } from "@/components/icons/icon-glyph";
import { asset, siteUrl } from "@/lib/config";
import { getConceptsTable } from "@/lib/icon-concepts";
import { getIconSvgs } from "@/lib/icon-detail";
import { getIconDisplayName } from "@/lib/icon-search";

const description =
  "One idea, one icon. The concepts table names the canonical Blode icon for each concept, so a set never grows two answers to the same question.";
const title = "Concepts";
const pageUrl = `${siteUrl}/concepts`;

export const metadata: Metadata = {
  alternates: { canonical: pageUrl },
  description,
  openGraph: {
    description,
    images: [{ url: "/opengraph-image" }],
    locale: "en_US",
    siteName: "Matthew Blode",
    title,
    type: "article",
    url: pageUrl,
  },
  title,
  twitter: {
    card: "summary_large_image",
    creator: "@mattblode",
    description,
    images: ["/opengraph-image"],
    title,
  },
};

export default async function ConceptsPage() {
  const { concepts, present, unresolved } = await getConceptsTable();
  const markupBySlug = await getIconSvgs([
    ...new Set(concepts.map((entry) => entry.slug)),
  ]);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8">
      <h1 className="font-semibold text-2xl tracking-tight">Concepts</h1>
      <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
        Tags are many-to-many, and they collide: <code>brand</code> reaches 72
        icons, <code>ai</code> reaches 51. That is the right shape for search
        and the wrong shape for a decision. The concepts table is the other
        half: each concept has exactly one canonical icon, so
        &ldquo;what&rsquo;s the icon for delete?&rdquo; has one answer and the
        set cannot quietly grow a second one.
      </p>

      {present ? null : (
        <div className="mt-8 rounded-2xl border border-border border-dashed p-5">
          <h2 className="font-medium text-sm">Not published yet</h2>
          <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
            <code>icons-data/_concepts.json</code> is not in this build. The
            page ships with an empty table rather than a broken route, and fills
            in on the next deploy after the file lands. Until then, search is
            the way in: it matches names, tags, and Lucide aliases, so{" "}
            <code>search</code> already finds{" "}
            <a
              className="underline underline-offset-2"
              href={asset("/magnifying-glass")}
            >
              magnifying glass
            </a>
            .
          </p>
        </div>
      )}

      {concepts.length > 0 ? (
        <>
          <p className="mt-8 text-muted-foreground text-sm">
            {concepts.length} concepts.
          </p>
          <ul className="mt-3 border-border border-t">
            {concepts.map((entry) => (
              <li
                className="border-border border-b"
                key={`${entry.concept}:${entry.slug}`}
              >
                <a
                  className="flex items-center gap-4 py-3 transition-colors hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
                  href={asset(`/${entry.slug}`)}
                >
                  <IconGlyph markup={markupBySlug[entry.slug] ?? null} />
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium text-sm">
                      {entry.concept}
                    </span>
                    {entry.note ? (
                      <span className="block text-muted-foreground text-xs">
                        {entry.note}
                      </span>
                    ) : null}
                  </span>
                  <span className="shrink-0 text-muted-foreground text-sm">
                    {getIconDisplayName(entry.slug)}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {unresolved.length > 0 ? (
        <p className="mt-6 text-muted-foreground text-xs">
          {unresolved.length}{" "}
          {unresolved.length === 1 ? "concept points" : "concepts point"} at a
          slug with no icon and {unresolved.length === 1 ? "is" : "are"} not
          listed: {unresolved.join(", ")}.
        </p>
      ) : null}
    </div>
  );
}
