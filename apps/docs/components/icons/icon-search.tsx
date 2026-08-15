"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PAGE_SIZE } from "@/lib/icon-grid";
import {
  filterIconsByStyle,
  getAllSearchDocs,
  getIconDisplayName,
  searchIcons,
} from "@/lib/icon-search";
import { loadIconSource, loadIconSvgBatch } from "@/lib/icon-source";
import type { IconCopyKind, IconStyle, SearchDoc } from "@/lib/icon-types";
import MagnifyingGlassIcon from "@/src/icons-tsx/magnifying-glass";

const COPY_KIND_LABEL: Record<IconCopyKind, string> = {
  NAME: "name",
  SVG: "SVG",
  TSX: "TSX",
};

const ICON_SUFFIX_REGEX = /Icon$/;
const FILLED_SUFFIX = "FilledIcon";

// Module-level cache so toggling style / re-searching never re-fetches an SVG.
const svgCache = new Map<string, string>();

const resolveVariant = (doc: SearchDoc, style: IconStyle) => {
  const solid = style === "SOLID" && doc.hasFilled;
  return {
    name: solid ? doc.name.replace(ICON_SUFFIX_REGEX, FILLED_SUFFIX) : doc.name,
    slug: solid ? `${doc.slug}-filled` : doc.slug,
  };
};

const IconCell = ({
  doc,
  style,
  markup,
  onCopy,
}: {
  doc: SearchDoc;
  style: IconStyle;
  markup: string | null;
  onCopy: (slug: string, name: string, copyKind: IconCopyKind) => void;
}) => {
  const { slug, name } = resolveVariant(doc, style);

  return (
    <div>
      <div className="group relative flex h-[104px] flex-col items-center justify-center overflow-hidden rounded-xl border border-border px-2 [contain-intrinsic-size:104px] [content-visibility:auto]">
        {markup ? (
          // Zoom the glyph on hover/focus instead of hiding it behind the copy
          // buttons, so you can actually see the icon while deciding (issue #14).
          //
          // dangerouslySetInnerHTML rather than assigning innerHTML in an
          // effect: the effect only runs after hydration, so the server HTML
          // shipped an empty div and the whole grid stayed blank until the
          // bundle booted. This renders the glyph into the document itself.
          // The markup is this repo's own src/icons-svg files, never user input.
          <div
            className="flex size-6 items-center justify-center transition-transform duration-150 ease-out group-focus-within:-translate-y-1.5 group-focus-within:scale-[1.85] group-hover:-translate-y-1.5 group-hover:scale-[1.85] [&_svg]:size-6"
            dangerouslySetInnerHTML={{ __html: markup }}
          />
        ) : (
          <div className="size-6 rounded-md bg-muted/40" />
        )}

        <div className="absolute inset-x-0 bottom-0 flex gap-1 bg-gradient-to-t from-background via-background/95 to-transparent p-1.5 opacity-0 transition-opacity duration-150 group-focus-within:opacity-100 group-hover:opacity-100">
          <Button
            aria-label={`Copy ${getIconDisplayName(name)} SVG`}
            className="h-7 flex-1 cursor-pointer px-2 text-xs"
            onClick={() => onCopy(slug, name, "SVG")}
            variant="secondary"
          >
            SVG
          </Button>
          <Button
            aria-label={`Copy ${getIconDisplayName(name)} name`}
            className="h-7 flex-1 cursor-pointer px-2 text-xs"
            onClick={() => onCopy(slug, name, "NAME")}
            variant="secondary"
          >
            Name
          </Button>
        </div>
      </div>

      <span className="mt-2 line-clamp-2 text-center text-muted-foreground text-xs">
        {getIconDisplayName(name)}
      </span>
    </div>
  );
};

export const IconSearch = ({
  initialSvgs,
}: {
  /** First batch, rendered on the server so the opening screen costs no requests. */
  initialSvgs: Record<string, string>;
}) => {
  const [iconStyle, setIconStyle] = useState<IconStyle>("OUTLINE");
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(() => searchIcons(searchQuery), [searchQuery]);
  const filteredIcons = useMemo(
    () => filterIconsByStyle(searchResults, iconStyle),
    [iconStyle, searchResults]
  );

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Reset to the first batch whenever the result set changes. The deps track
  // the query and style inputs, not the derived list.
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [searchQuery, iconStyle]);

  // Reveal the next batch as the sentinel approaches the viewport.
  useEffect(() => {
    if (visibleCount >= filteredIcons.length) {
      return;
    }
    const el = sentinelRef.current;
    if (!el) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((count) => count + PAGE_SIZE);
        }
      },
      { rootMargin: "600px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visibleCount, filteredIcons.length]);

  const visibleIcons = filteredIcons.slice(0, visibleCount);

  const visibleSlugs = useMemo(
    () => visibleIcons.map((doc) => resolveVariant(doc, iconStyle).slug),
    [visibleIcons, iconStyle]
  );

  // Markup that has arrived so far. Seeded from the server payload, so the
  // opening screen paints from the document instead of waiting on the network.
  // The module-level svgCache survives unmount; this state is what React
  // re-renders on.
  const [markupBySlug, setMarkupBySlug] = useState(() => {
    for (const [slug, markup] of Object.entries(initialSvgs)) {
      svgCache.set(slug, markup);
    }
    return new Map(svgCache);
  });

  // One request per batch, not one per icon.
  useEffect(() => {
    const missing = visibleSlugs.filter((slug) => !svgCache.has(slug));
    if (missing.length === 0) {
      // Style toggles and searches surface slugs already cached from an earlier
      // batch, so publish those without going to the network.
      setMarkupBySlug((current) =>
        visibleSlugs.every((slug) => current.has(slug))
          ? current
          : new Map(svgCache)
      );
      return;
    }

    let active = true;
    (async () => {
      try {
        const batch = await loadIconSvgBatch(missing);
        if (!active) {
          return;
        }
        for (const [slug, markup] of Object.entries(batch)) {
          svgCache.set(slug, markup);
        }
        setMarkupBySlug(new Map(svgCache));
      } catch {
        // A failed batch leaves placeholders; the next scroll or search retries.
      }
    })();

    return () => {
      active = false;
    };
  }, [visibleSlugs]);

  const handleIconCopy = async (
    slug: string,
    name: string,
    copyKind: IconCopyKind
  ) => {
    try {
      const value =
        copyKind === "NAME"
          ? name
          : await loadIconSource({ copyKind, iconName: slug });

      if (!value) {
        toast.error(`Failed to copy ${name}`);
        return;
      }

      await navigator.clipboard.writeText(value);
      toast(
        `"${getIconDisplayName(name)}" ${COPY_KIND_LABEL[copyKind]} copied to clipboard`
      );
    } catch {
      toast.error(`Failed to copy ${name}`);
    }
  };

  return (
    <>
      {/*
       * Says what this page does, rather than restating the title tag. A screen
       * reader lands on the search field next, so the heading should name that.
       */}
      <h1 className="sr-only">Search the Blode Icons library</h1>
      <div className="relative sticky top-0 z-10 mb-4 bg-background py-4">
        <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mx-auto w-full max-w-[1400px] px-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Input
              autoFocus
              className="w-full pl-10"
              leftAddon={
                <MagnifyingGlassIcon className="absolute top-1/2 left-4 size-4 -translate-y-1/2" />
              }
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder={`Search all ${filterIconsByStyle(getAllSearchDocs(), iconStyle).length} icons...`}
              type="text"
              value={searchQuery}
            />

            <Tabs
              className="h-[52px]! w-full sm:w-auto"
              onValueChange={(value) => setIconStyle(value as IconStyle)}
              value={iconStyle}
            >
              <TabsList className="h-[52px]! w-full rounded-2xl sm:w-auto [&>span]:rounded-xl">
                <TabsTrigger
                  className="w-full gap-1 rounded-xl px-4 sm:w-auto"
                  value="OUTLINE"
                >
                  <div className="size-2 rounded-full border border-foreground" />
                  Line
                </TabsTrigger>
                <TabsTrigger
                  className="w-full gap-1 rounded-xl px-4 sm:w-auto"
                  value="SOLID"
                >
                  <div className="size-2 rounded-full border border-foreground bg-foreground" />
                  Solid
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 pb-12">
        <div className="grid grid-cols-2 gap-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {visibleIcons.map((doc) => (
            <IconCell
              doc={doc}
              key={doc.slug}
              markup={
                markupBySlug.get(resolveVariant(doc, iconStyle).slug) ?? null
              }
              onCopy={handleIconCopy}
              style={iconStyle}
            />
          ))}
        </div>
        {visibleCount < filteredIcons.length ? (
          <div aria-hidden className="h-px w-full" ref={sentinelRef} />
        ) : null}
      </div>
    </>
  );
};
