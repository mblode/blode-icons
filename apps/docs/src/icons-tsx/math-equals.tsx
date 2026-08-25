import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const MathEqualsIcon = (
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
    <path stroke="currentColor" strokeLinecap="round" d="M5 9h14M5 15h14" />
  </svg>
);
const ForwardRef = forwardRef(MathEqualsIcon);
export default createLucideIcon("MathEqualsIcon", ForwardRef);
