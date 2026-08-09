import * as React from "react";

import type { LucideIcon, LucideProps } from "./lucide-types";

/**
 * Wraps an icon component so it accepts lucide-compatible props
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
        absoluteStrokeWidth = false,
        color = "currentColor",
        size = 24,
        strokeWidth = 2,
        ...rest
      },
      ref
    ) => {
      const numericSize = Number(size);
      const numericStroke = Number(strokeWidth);
      const calculatedStrokeWidth =
        absoluteStrokeWidth &&
        Number.isFinite(numericSize) &&
        numericSize > 0 &&
        Number.isFinite(numericStroke)
          ? (numericStroke * 24) / numericSize
          : strokeWidth;

      return React.createElement(IconComponent, {
        ref,
        width: size,
        height: size,
        strokeWidth: calculatedStrokeWidth,
        color,
        ...rest,
      });
    }
  );

  WrappedIcon.displayName = name;
  return WrappedIcon;
}
