import * as React from "react";
import type { LucideIcon, LucideProps } from "./lucide-types";

/**
 * Wraps a @fingertip/icons component so it accepts lucide-react props
 * (size, color, strokeWidth, absoluteStrokeWidth) and supports forwardRef.
 */
export function createLucideIcon(
  name: string,
  IconComponent: React.ForwardRefExoticComponent<
    React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>
  >
): LucideIcon {
  const WrappedIcon = React.forwardRef<SVGSVGElement, LucideProps>(
    (
      {
        color = "currentColor",
        size = 24,
        strokeWidth = 2,
        absoluteStrokeWidth,
        style,
        ...rest
      },
      ref
    ) => {
      const computedStrokeWidth = absoluteStrokeWidth
        ? (Number(strokeWidth) * 24) / Number(size)
        : strokeWidth;

      return React.createElement(IconComponent, {
        ref,
        width: size,
        height: size,
        strokeWidth: computedStrokeWidth,
        style: { color, ...style },
        ...rest,
      });
    }
  );

  WrappedIcon.displayName = name;
  return WrappedIcon;
}
