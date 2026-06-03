import type { LucideIcon } from "@/src/icons-tsx";

export type IconStyle = "OUTLINE" | "SOLID";
export type IconCopyKind = "SVG" | "NAME" | "TSX";

export interface IconMetadata {
  category: string;
  tags: string[];
}

export interface IconRecord extends IconMetadata {
  categories: string[];
  component: LucideIcon;
  name: string;
}

/** Prebuilt search document — one per base (outline) icon. No live component. */
export interface SearchDoc {
  category: string;
  /** Whether a distinct filled variant exists (drives the Solid style filter). */
  hasFilled: boolean;
  /** Outline component name, e.g. "AgentIcon". */
  name: string;
  /** Kebab slug, e.g. "agent" — used for SVG fetch + filled-variant lookup. */
  slug: string;
  tags: string[];
  /** Space-separated slug words for tokenized search, e.g. "agentic coding". */
  title: string;
}
