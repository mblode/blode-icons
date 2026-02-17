import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AspectRatio11Icon = (
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
      d="M4 7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AspectRatio11Icon);
export default ForwardRef;
