import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HomeCircleIcon = (
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
      d="M4 8.2545a3 3 0 0 1 1.5292-2.6147l5-2.8125a3 3 0 0 1 2.9416 0l5 2.8125A3 3 0 0 1 20 8.2545V17c0 1.6568-1.3431 3-3 3H7c-1.6569 0-3-1.3432-3-3z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M15 12c0 1.6568-1.3431 3-3 3s-3-1.3432-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(HomeCircleIcon);
export default ForwardRef;
