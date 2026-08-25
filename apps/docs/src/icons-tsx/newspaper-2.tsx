import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const Newspaper2Icon = (
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
      d="M12 8c0-1.6569 1.3431-3 3-3h5c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2h-4.723c-.6804 0-1.3474.1642-1.9262.5219S12.3043 20.3914 12 21m0-13c0-1.6569-1.3431-3-3-3H4c-1.1046 0-2 .8954-2 2v10c0 1.1046.8954 2 2 2h4.723c.6804 0 1.3474.1642 1.9262.5219S11.6957 20.3914 12 21m0-13v13"
    />
  </svg>
);
const ForwardRef = forwardRef(Newspaper2Icon);
export default createLucideIcon("Newspaper2Icon", ForwardRef);
