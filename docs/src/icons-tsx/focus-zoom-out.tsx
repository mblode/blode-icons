import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FocusZoomOutIcon = (
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
      d="M4 8V7c0-1.6569 1.3431-3 3-3h1M4 16v1c0 1.6569 1.3431 3 3 3h1m8-16h1c1.6569 0 3 1.3431 3 3v1m0 8v1c0 1.6569-1.3431 3-3 3h-1M12 9v3m0 0v3m0-3H9m3 0h3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FocusZoomOutIcon);
export default ForwardRef;
