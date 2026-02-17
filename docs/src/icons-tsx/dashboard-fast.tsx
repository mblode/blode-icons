import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DashboardFastIcon = (
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
      d="m15 10-2.75 5.5m7.25.5h-15M21 12c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9 4.0294 9 9 9 9-4.0294 9-9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(DashboardFastIcon);
export default ForwardRef;
