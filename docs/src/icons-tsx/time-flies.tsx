import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TimeFliesIcon = (
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
    <circle
      cx={15}
      cy={12}
      r={7}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M2 12h2m-1 4h2M3 8h2M15 9v3l1.5 1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TimeFliesIcon);
export default ForwardRef;
