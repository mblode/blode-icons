import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const StepForwardsIcon = (
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
      d="m17 3 3 3-3 3m2-3h-8.5C6.9102 6 4 8.9101 4 12.5S6.9101 19 10.5 19H18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(StepForwardsIcon);
export default ForwardRef;
