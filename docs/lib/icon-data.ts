import type { IconMetadata } from "@/lib/icon-types";
import iconsMetadata from "@/src/icons-data/metadata.json";

const EMPTY_ICON_METADATA: IconMetadata = {
  category: "",
  tags: [],
};

const metadataByIcon = iconsMetadata as Record<string, IconMetadata>;

const normalizeIconSlug = (iconSlug: string) => iconSlug.replace(/-/g, "");

const metadataByNormalizedSlug = new Map<string, IconMetadata>(
  Object.entries(metadataByIcon).map(([iconSlug, metadata]) => [
    normalizeIconSlug(iconSlug),
    metadata,
  ]),
);

export const getIconMetadata = (iconSlug: string): IconMetadata => {
  return (
    metadataByIcon[iconSlug] ??
    metadataByNormalizedSlug.get(normalizeIconSlug(iconSlug)) ??
    EMPTY_ICON_METADATA
  );
};
