import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TelevisionIcon = (
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
      d="M18 20c-1.886-.6487-3.9033-1-6-1s-4.114.3513-6 1m0-4h12c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3H6C4.3431 4 3 5.3431 3 7v6c0 1.6569 1.3431 3 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TelevisionIcon);
export default ForwardRef;
