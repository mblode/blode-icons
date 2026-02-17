import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SimCard1Icon = (
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
      d="M9 13.5c0-.8284.6716-1.5 1.5-1.5h3c.8284 0 1.5.6716 1.5 1.5v2c0 .8284-.6716 1.5-1.5 1.5h-3c-.8284 0-1.5-.6716-1.5-1.5z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M5 6c0-1.6569 1.3431-3 3-3h4.3431a4 4 0 0 1 2.8285 1.1716l2.6568 2.6568A4 4 0 0 1 19 9.657V18c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SimCard1Icon);
export default ForwardRef;
