import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const MathGreaterThanCircleIcon = (
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
    <circle cx={12} cy={12} r={9} stroke="currentColor" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9.5 9 6 3-6 3"
    />
  </svg>
);
const ForwardRef = forwardRef(MathGreaterThanCircleIcon);
export default createLucideIcon("MathGreaterThanCircleIcon", ForwardRef);
