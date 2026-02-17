import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BatteryLowIcon = (
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
      d="M19 15V9m0 6c0 1.6569-1.3431 3-3 3H5c-1.6568 0-3-1.3431-3-3V9c0-1.6569 1.3432-3 3-3h11c1.6569 0 3 1.3431 3 3m0 6h1.5c.8284 0 1.5-.6716 1.5-1.5v-3c0-.8284-.6716-1.5-1.5-1.5H19M6 10v4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BatteryLowIcon);
export default ForwardRef;
