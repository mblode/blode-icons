import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CarusselIcon = (
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
      d="M17 6h1c1.6569 0 3 1.3431 3 3v6c0 1.6569-1.3431 3-3 3h-1M7 18H6c-1.6569 0-3-1.3431-3-3V9c0-1.6569 1.3431-3 3-3h1m3-2h4c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3h-4c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CarusselIcon);
export default ForwardRef;
