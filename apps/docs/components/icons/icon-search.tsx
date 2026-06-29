"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  filterIconsByStyle,
  getIconDisplayName,
  searchIcons,
} from "@/lib/icon-search";
import { loadIconSource } from "@/lib/icon-source";
import type { IconCopyKind, IconStyle, SearchDoc } from "@/lib/icon-types";
import MagnifyingGlassIcon from "@/src/icons-tsx/magnifying-glass";

const COPY_KIND_LABEL: Record<IconCopyKind, string> = {
  SVG: "SVG",
  NAME: "name",
  TSX: "TSX",
};

const ICON_SUFFIX_REGEX = /Icon$/;
const FILLED_SUFFIX = "FilledIcon";

// Render the grid in batches so the initial HTML document stays small (a full
// 2,000+ cell render blows past Googlebot's crawl budget). More batches reveal
// as the sentinel scrolls into view; search/style changes reset to the first.
const PAGE_SIZE = 120;

// Module-level cache so toggling style / re-searching never re-fetches an SVG.
const svgCache = new Map<string, string>();

const useInViewport = <T extends Element>(rootMargin = "300px") => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView || !ref.current) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return { ref, inView };
};

const resolveVariant = (doc: SearchDoc, style: IconStyle) => {
  const solid = style === "SOLID" && doc.hasFilled;
  return {
    slug: solid ? `${doc.slug}-filled` : doc.slug,
    name: solid ? doc.name.replace(ICON_SUFFIX_REGEX, FILLED_SUFFIX) : doc.name,
  };
};

const IconCell = ({
  doc,
  style,
  onCopy,
}: {
  doc: SearchDoc;
  style: IconStyle;
  onCopy: (slug: string, name: string, copyKind: IconCopyKind) => void;
}) => {
  const { ref, inView } = useInViewport<HTMLDivElement>();
  const { slug, name } = resolveVariant(doc, style);
  const [markup, setMarkup] = useState<string | null>(
    svgCache.get(slug) ?? null
  );
  const svgRef = useRef<HTMLDivElement>(null);

  // Load (or swap to) the SVG for the current slug — runs on first viewport
  // entry and whenever the style toggle changes the slug.
  useEffect(() => {
    if (!inView) {
      return;
    }
    const cached = svgCache.get(slug);
    setMarkup(cached ?? null);
    if (cached) {
      return;
    }
    let active = true;
    // Retry transient failures (e.g. the API route still compiling on first
    // paint, when dozens of cells fetch at once) so an icon never gets stuck as
    // a placeholder. Swallow errors — a missing icon just keeps its placeholder.
    const load = async (attempt = 0) => {
      try {
        const svg = await loadIconSource({ iconName: slug, copyKind: "SVG" });
        if (!active) {
          return;
        }
        if (svg) {
          svgCache.set(slug, svg);
          setMarkup(svg);
        }
      } catch {
        if (active && attempt < 3) {
          setTimeout(() => load(attempt + 1), 250 * (attempt + 1));
        }
      }
    };
    load();
    return () => {
      active = false;
    };
  }, [inView, slug]);

  // Inject the fetched markup via ref so currentColor theming is preserved
  // without dangerouslySetInnerHTML.
  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.innerHTML = markup ?? "";
    }
  }, [markup]);

  return (
    <div>
      <div
        className="group relative flex h-[104px] flex-col items-center justify-center overflow-hidden rounded-xl border border-border px-2 [contain-intrinsic-size:104px] [content-visibility:auto]"
        ref={ref}
      >
        {markup ? (
          // Zoom the glyph on hover/focus instead of hiding it behind the copy
          // buttons, so you can actually see the icon while deciding (issue #14).
          <div
            className="flex size-6 items-center justify-center transition-transform duration-150 ease-out group-focus-within:-translate-y-1.5 group-focus-within:scale-[1.85] group-hover:-translate-y-1.5 group-hover:scale-[1.85] [&_svg]:size-6"
            ref={svgRef}
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

export const IconSearch = () => {
  const [iconStyle, setIconStyle] = useState<IconStyle>("OUTLINE");
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = useMemo(() => searchIcons(searchQuery), [searchQuery]);
  const filteredIcons = useMemo(
    () => filterIconsByStyle(searchResults, iconStyle),
    [iconStyle, searchResults]
  );

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Reset to the first batch whenever the result set changes.
  // biome-ignore lint/correctness/useExhaustiveDependencies: reset tracks the query/style inputs, not the derived list.
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

  const handleIconCopy = async (
    slug: string,
    name: string,
    copyKind: IconCopyKind
  ) => {
    try {
      const value =
        copyKind === "NAME"
          ? name
          : await loadIconSource({ iconName: slug, copyKind });

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
      <h1 className="sr-only">
        Blode Icons — open-source SVG icon library for React
      </h1>
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
              placeholder="Search all icons..."
              type="text"
              value={searchQuery}
            />

            <Tabs
              className="h-[52px]! w-full sm:w-auto"
              onValueChange={(value) => setIconStyle(value as IconStyle)}
              value={iconStyle}
            >
              <TabsList className="h-[52px]! w-full sm:w-auto">
                <TabsTrigger className="w-full px-4 sm:w-auto" value="OUTLINE">
                  <div className="mr-2 size-2 rounded-full border border-foreground" />
                  Outline
                </TabsTrigger>
                <TabsTrigger className="w-full px-4 sm:w-auto" value="SOLID">
                  <div className="mr-2 size-2 rounded-full border border-foreground bg-foreground" />
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
