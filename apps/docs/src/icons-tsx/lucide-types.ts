import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

/**
 * Props accepted by icon components.
 * Compatible with the lucide-react LucideProps interface.
 */
export interface LucideProps extends SVGProps<SVGSVGElement> {
  /**
   * When true, stroke width scales with `size` so icons look consistent
   * at any size (lucide-react compatible).
   */
  absoluteStrokeWidth?: boolean;
  /** Sets both width and height. Default: 24 */
  size?: string | number;
}

/**
 * The type of an icon component.
 * Compatible with the lucide-react LucideIcon type.
 */
export type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;
