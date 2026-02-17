import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const StepBackIcon = (
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
      d="M7 3 4 6l3 3M5 6h8.5c3.5899 0 6.5 2.9101 6.5 6.5S17.0899 19 13.5 19H6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(StepBackIcon);
export default ForwardRef;
