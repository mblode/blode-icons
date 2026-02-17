import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowSplitIcon = (
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
      d="M4 9V4m0 0h5M4 4l8 8m3-8h5m0 0v5m0-5-8 8m0 0v8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowSplitIcon);
export default ForwardRef;
