import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PageEmptyIcon = (
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
      d="M5 6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v12c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PageEmptyIcon);
export default ForwardRef;
