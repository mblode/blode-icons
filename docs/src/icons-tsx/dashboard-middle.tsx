import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DashboardMiddleIcon = (
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
      d="M12 16V9m0 7H4.5m7.5 0h7.5m1.5-4c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9 4.0294 9 9 9 9-4.0294 9-9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(DashboardMiddleIcon);
export default ForwardRef;
