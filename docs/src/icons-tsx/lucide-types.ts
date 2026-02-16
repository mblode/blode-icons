import type {
  ForwardRefExoticComponent,
  RefAttributes,
  SVGProps,
} from 'react'

/**
 * Props accepted by lucide-compatible icon components.
 * Mirrors the lucide-react LucideProps interface.
 */
export interface LucideProps extends SVGProps<SVGSVGElement> {
  /** Sets both width and height. Default: 24 */
  size?: string | number
  /**
   * When true, stroke width remains constant regardless of size.
   * The stroke width is scaled inversely to the size ratio.
   */
  absoluteStrokeWidth?: boolean
}

/**
 * The type of a lucide-compatible icon component.
 * Mirrors the lucide-react LucideIcon type.
 */
export type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
>
