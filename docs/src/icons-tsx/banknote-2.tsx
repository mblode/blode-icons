import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Banknote2Icon = (
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
    <rect
      height={13}
      rx={3}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      width={19}
      x={2.5}
      y={5.5}
    />
    <circle
      cx={12}
      cy={12}
      r={2}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M21 9c-1.6569 0-3-1.3431-3-3M6 6c0 1.6569-1.3431 3-3 3M18 18c0-1.6569 1.3431-3 3-3M6 18c0-1.6569-1.3431-3-3-3"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Banknote2Icon);
export default ForwardRef;
