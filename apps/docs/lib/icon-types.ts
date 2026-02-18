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
