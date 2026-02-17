import * as React from 'react'
import type { LucideIcon, LucideProps } from './lucide-types'

/**
 * Wraps an icon component so it accepts lucide-compatible props
 * (size, color, strokeWidth) and supports forwardRef.
 */
export function createLucideIcon(
  name: string,
  IconComponent: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
  >,
): LucideIcon {
  const WrappedIcon = React.forwardRef<SVGSVGElement, LucideProps>(
    (
      {
        color = 'currentColor',
        size = 24,
        strokeWidth = 2,
        style,
        ...rest
      },
      ref,
    ) => {
      return React.createElement(IconComponent, {
        ref,
        width: size,
        height: size,
        strokeWidth,
        style: { color, ...style },
        ...rest,
      })
    },
  )

  WrappedIcon.displayName = name
  return WrappedIcon
}
