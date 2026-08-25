import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const HomeEnergyIcon = (
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
      d="M19 7.7615v2.1193M2.5 9.5512l8.5686-6.1344c.3351-.2399.5026-.3598.6854-.4062a1 1 0 0 1 .492 0c.1828.0464.3503.1663.6854.4062L21.5 9.5512"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 7.7615V15.2c0 1.6801 0 2.5202.327 3.1619a3 3 0 0 0 1.311 1.3111C7.2798 20 8.1198 20 9.8 20H12"
    />
    <path
      fill="currentColor"
      d="M19.0184 14.0218c0-.4894-.6003-.7086-.9033-.3298l-2.999 3.749c-.2721.34-.0355.8506.3941.8506h1.4714v2.1866c0 .4894.6003.7086.9033.3298l2.999-3.749c.2721-.34.0355-.8506-.3941-.8506h-1.4714z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="square"
      d="M9.5 12c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5-1.1193 2.5-2.5 2.5-2.5-1.1193-2.5-2.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(HomeEnergyIcon);
export default createLucideIcon("HomeEnergyIcon", ForwardRef);
