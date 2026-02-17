import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowsRepeatIcon = (
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
      d="M4 13V8c0-1.6569 1.3431-3 3-3h8m-2-3 3 3-3 3m7 3v5c0 1.6569-1.3431 3-3 3H9m2 3-3-3 3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowsRepeatIcon);
export default ForwardRef;
