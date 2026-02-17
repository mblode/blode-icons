import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShoppingBag4Icon = (
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
      d="M4 11c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v6c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3zM8 8V7c0-2.2091 1.7909-4 4-4s4 1.7909 4 4v1"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBag4Icon);
export default ForwardRef;
