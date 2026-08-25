import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const ColorPaletteIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.4 12.25h.2M10.4 8h.2m4.8 1.5h.2M8 12.25a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 8 12.25M11 8a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 11 8m5 1.5a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 16 9.5m-4 11c-4.9706 0-9-3.8056-9-8.5s4.0294-8.5 9-8.5 9 3.8056 9 8.5c0 6.9062-7.3875.7751-9 4-1 2 2.8273 4.5 0 4.5"
    />
  </svg>
);
const ForwardRef = forwardRef(ColorPaletteIcon);
export default createLucideIcon("ColorPaletteIcon", ForwardRef);
