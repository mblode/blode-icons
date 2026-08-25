import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const WashingMachineIcon = (
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
    <rect
      width={16}
      height={16}
      x={4}
      y={4}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      rx={3}
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      d="M7.25 7.25h.01m.24 0a.25.25 0 0 1-.5 0 .25.25 0 0 1 .5 0Z"
    />
    <circle cx={12} cy={13} r={4} stroke="currentColor" />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      d="M8.5 13c2.4547-2.1101 4.2606 2.3548 7 0"
    />
  </svg>
);
const ForwardRef = forwardRef(WashingMachineIcon);
export default createLucideIcon("WashingMachineIcon", ForwardRef);
