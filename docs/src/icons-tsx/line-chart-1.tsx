import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LineChart1Icon = (
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
      d="M9 11v5m5-11v11m5-3v3M4 4v13c0 1.6569 1.3431 3 3 3h14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(LineChart1Icon);
export default ForwardRef;
