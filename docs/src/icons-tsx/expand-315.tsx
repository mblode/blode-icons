import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Expand315Icon = (
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
      d="M10 4H4v6m16 4v6h-6M4.75 4.75 10 10m4 4 5.25 5.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Expand315Icon);
export default ForwardRef;
