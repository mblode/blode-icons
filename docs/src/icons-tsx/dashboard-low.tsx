import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DashboardLowIcon = (
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
      d="m9 10 2.75 5.5M4.5 16h15m1.5-4c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9 4.0294 9 9 9 9-4.0294 9-9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(DashboardLowIcon);
export default ForwardRef;
