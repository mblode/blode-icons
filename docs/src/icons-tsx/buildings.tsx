import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BuildingsIcon = (
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
      d="M4 19h10M4 19V7c0-1.6569 1.3431-3 3-3h4c1.6569 0 3 1.3431 3 3v1M4 19H2m12 0V8m0 11h6M14 8h3c1.6569 0 3 1.3431 3 3v8m0 0h2M10 9H8m0 4h2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BuildingsIcon);
export default ForwardRef;
