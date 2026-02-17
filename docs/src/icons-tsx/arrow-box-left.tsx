import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowBoxLeftIcon = (
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
      d="M11.25 20H7c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3h4.25M20 12H8.75M20 12l-4.5 4.5M20 12l-4.5-4.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowBoxLeftIcon);
export default ForwardRef;
