import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const ArCube1Icon = (
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
      d="M12.0002 12 4.5 7.7812M12.0002 12 12 20.5m.0002-8.5L19.5 7.7812m.5.8885v6.6606a2 2 0 0 1-1.0195 1.7431l-6 3.375a2 2 0 0 1-1.961 0l-6-3.375A2 2 0 0 1 4 15.3303V8.6697c0-.7226.3897-1.389 1.0195-1.7432l6-3.375a2 2 0 0 1 1.961 0l6 3.375A2 2 0 0 1 20 8.6697"
    />
  </svg>
);
const ForwardRef = forwardRef(ArCube1Icon);
export default createLucideIcon("ArCube1Icon", ForwardRef);
