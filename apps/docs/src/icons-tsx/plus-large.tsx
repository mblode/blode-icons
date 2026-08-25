import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const PlusLargeIcon = (
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
      d="M12 4v8m0 0v8m0-8H4m8 0h8"
    />
  </svg>
);
const ForwardRef = forwardRef(PlusLargeIcon);
export default createLucideIcon("PlusLargeIcon", ForwardRef);
