import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const VolumeOffIcon = (
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
      d="m21.5 10-2.1213 2.1213m0 0-2.1213 2.1213m2.1213-2.1213L17.2574 10m2.1213 2.1213L21.5 14.2426M4 8h1.2759c.4679 0 .921-.164 1.2804-.4636l3.8035-3.1696C11.0111 3.824 12 4.2872 12 5.135v13.73c0 .8479-.9889 1.311-1.6402.7683l-3.8035-3.1697A2 2 0 0 0 5.2759 16H4c-1.1046 0-2-.8954-2-2v-4c0-1.1046.8954-2 2-2Z"
    />
  </svg>
);
const ForwardRef = forwardRef(VolumeOffIcon);
export default createLucideIcon("VolumeOffIcon", ForwardRef);
