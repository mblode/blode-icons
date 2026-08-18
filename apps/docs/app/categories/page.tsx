import type { Metadata } from "next";

import { IconGlyph } from "@/components/icons/icon-glyph";
import { asset, siteUrl } from "@/lib/config";
import { getIconCategories } from "@/lib/icon-categories";
import { getIconSvgs } from "@/lib/icon-detail";

const description =
  "Browse all 2,139 Blode Icons by category, from Arrows and Interface General to Crypto and Weather.";
const title = "Categories";
const pageUrl = `${siteUrl}/categories`;

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

/** Enough glyphs on a card to say what the category is, without a second row. */
const PREVIEW_COUNT = 6;

export default async function CategoriesPage() {
  const categories = getIconCategories();
  const previewSlugs = categories.flatMap((category) =>
    category.icons.slice(0, PREVIEW_COUNT).map((doc) => doc.slug)
  );
  const markupBySlug = await getIconSvgs(previewSlugs);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <h1 className="font-semibold text-2xl tracking-tight">Categories</h1>
      <p className="mt-1 max-w-2xl text-muted-foreground text-sm">
        Search is the fast path when you know roughly what you want. Categories
        are for the other case: seeing what the set already covers before adding
        to it.
      </p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <li key={category.slug}>
            <a
              className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-border p-4 transition-colors hover:bg-muted/50 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2"
              href={asset(`/categories/${category.slug}`)}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-medium text-sm">{category.name}</span>
                <span className="text-muted-foreground text-xs">
                  {category.count}
                </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                {category.icons.slice(0, PREVIEW_COUNT).map((doc) => (
                  <IconGlyph
                    key={doc.slug}
                    markup={markupBySlug[doc.slug] ?? null}
                    size={20}
                  />
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
