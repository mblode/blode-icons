import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const RescueRingFilledIcon = (
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
      fill="currentColor"
      d="M4.257 5.6713C2.8464 7.3952 2 9.5988 2 12s.8464 4.6049 2.2571 6.3288l3.933-3.933C7.7529 13.7021 7.5 12.8806 7.5 12s.2529-1.702.69-2.3957zM5.6712 4.257l3.933 3.933C10.298 7.753 11.1194 7.5 12 7.5s1.7021.253 2.3958.69l3.933-3.9329C16.6049 2.8464 14.4013 2 12 2s-4.6049.8464-6.3288 2.257M19.743 5.6713l-3.933 3.933c.4371.6937.69 1.5152.69 2.3957s-.2529 1.702-.6901 2.3958l3.933 3.933C21.1536 16.6049 22 14.4013 22 12c0-2.4012-.8463-4.6048-2.257-6.3287M18.3287 19.743l-3.933-3.933c-.6937.4371-1.5152.69-2.3957.69s-1.702-.2529-2.3957-.69l-3.933 3.933C7.3952 21.1537 9.5988 22 12 22s4.6048-.8464 6.3287-2.257"
    />
  </svg>
);
const ForwardRef = forwardRef(RescueRingFilledIcon);
export default createLucideIcon("RescueRingFilledIcon", ForwardRef);
