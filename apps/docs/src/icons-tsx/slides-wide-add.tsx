import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const SlidesWideAddIcon = (
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
      d="M7 15H6c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v1m-5 5h2m0 0h2m-2 0v-2m0 2v2m7 0v-4c0-1.6569-1.3431-3-3-3h-8c-1.6569 0-3 1.3431-3 3v4c0 1.6569 1.3431 3 3 3h8c1.6569 0 3-1.3431 3-3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SlidesWideAddIcon);
export default createLucideIcon("SlidesWideAddIcon", ForwardRef);
