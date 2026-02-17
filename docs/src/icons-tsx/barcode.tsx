import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BarcodeIcon = (
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
      d="M7 5H6C4.3431 5 3 6.3431 3 8v1m14-4h1c1.6569 0 3 1.3431 3 3v1m0 6v1c0 1.6569-1.3431 3-3 3h-1M7 19H6c-1.6569 0-3-1.3431-3-3v-1m5-5v4m8-4v4m-4-4v2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BarcodeIcon);
export default ForwardRef;
