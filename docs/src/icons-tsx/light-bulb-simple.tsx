import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LightBulbSimpleIcon = (
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
      d="M15 18v-1.0416c0-.386.2256-.7322.5579-.9287L15.6076 16C17.6404 14.7751 19 12.5463 19 10c0-3.866-3.134-7-7-7s-7 3.134-7 7c0 2.5463 1.3596 4.7751 3.3924 6q.0248.015.0497.0297c.3323.1965.5579.5427.5579.9287V18m6 0v1c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3v-1m6 0H9"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(LightBulbSimpleIcon);
export default ForwardRef;
