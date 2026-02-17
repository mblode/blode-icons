import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FullscreenIcon = (
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
      d="M18 5H6C4.3431 5 3 6.3431 3 8v8c0 1.6569 1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FullscreenIcon);
export default ForwardRef;
