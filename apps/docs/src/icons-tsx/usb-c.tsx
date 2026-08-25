import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const UsbCIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6 12h12M6 17h12c2.7614 0 5-2.2386 5-5s-2.2386-5-5-5H6c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(UsbCIcon);
export default createLucideIcon("UsbCIcon", ForwardRef);
