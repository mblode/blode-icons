import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShoppingBag3Icon = (
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
      d="M8 12V4h8v8M4 8h16v9c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBag3Icon);
export default ForwardRef;
