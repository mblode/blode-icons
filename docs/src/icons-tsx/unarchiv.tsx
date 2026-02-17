import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const UnarchivIcon = (
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
      d="M20 7v10c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3V7m16 0-5-4m5 4H4m0 0 5-4m1 8h4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(UnarchivIcon);
export default ForwardRef;
