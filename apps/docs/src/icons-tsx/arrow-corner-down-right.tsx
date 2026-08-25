import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const ArrowCornerDownRightIcon = (
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
      d="M4 5v7c0 1.6569 1.3431 3 3 3h12m-3-4 4 4-4 4"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCornerDownRightIcon);
export default createLucideIcon("ArrowCornerDownRightIcon", ForwardRef);
