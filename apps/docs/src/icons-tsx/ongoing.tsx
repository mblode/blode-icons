import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const OngoingIcon = (
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
      d="M12 21c-4.9706 0-9-4.0294-9-9s4.0294-9 9-9m4.5 1.204A9.04 9.04 0 0 1 18.7083 6M16.5 19.796A9.04 9.04 0 0 0 18.7083 18m2.1215-7.7509C20.9415 10.8155 21 11.4009 21 12s-.0585 1.1845-.1702 1.7508M13 9l3 3-3 3"
    />
    <path stroke="currentColor" strokeLinecap="round" d="M15 12H8" />
  </svg>
);
const ForwardRef = forwardRef(OngoingIcon);
export default createLucideIcon("OngoingIcon", ForwardRef);
