import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HomeEnergyIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    height={24}
    ref={ref}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 7.7615v2.1193M2.5 9.5512l8.5686-6.1344c.3351-.2399.5026-.3598.6854-.4062.1615-.041.3306-.041.492 0 .1828.0464.3503.1663.6854.4062L21.5 9.5512"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M5 7.7615V15.2c0 1.6801 0 2.5202.327 3.1619a3 3 0 0 0 1.311 1.3111c.6418.327 1.4818.327 3.162.327H12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M19.0184 14.0218c0-.4894-.6003-.7086-.9033-.3298l-2.999 3.749c-.2721.34-.0355.8506.3941.8506h1.4714v2.1866c0 .4894.6003.7086.9033.3298l2.999-3.749c.2721-.34.0355-.8506-.3941-.8506h-1.4714z"
      fill="currentColor"
    />
    <path
      d="M9.5 12c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5-1.1193 2.5-2.5 2.5-2.5-1.1193-2.5-2.5Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(HomeEnergyIcon);
export default ForwardRef;
