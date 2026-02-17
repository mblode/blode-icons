import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BezierCurvesIcon = (
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
      d="M16 8h-.05c-3.9052.001-3.9948 8.0001-7.9 8.0001H8M7 4h10c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BezierCurvesIcon);
export default ForwardRef;
