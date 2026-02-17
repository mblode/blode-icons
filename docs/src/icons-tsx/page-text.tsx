import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PageTextIcon = (
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
      d="M9 7h6m-6 4h6m-6 4h2m-3 6h8c1.6569 0 3-1.3431 3-3V6c0-1.6569-1.3431-3-3-3H8C6.3431 3 5 4.3431 5 6v12c0 1.6569 1.3431 3 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PageTextIcon);
export default ForwardRef;
