import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AspectRatio219Icon = (
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
      d="M1 10c0-1.6569 1.3432-3 3-3h16c1.6569 0 3 1.3431 3 3v4c0 1.6569-1.3431 3-3 3H4c-1.6568 0-3-1.3431-3-3z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AspectRatio219Icon);
export default ForwardRef;
