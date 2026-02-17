import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleWideNotificationIcon = (
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
      d="M12.002 4h-6c-1.6569 0-3 1.3432-3 3v8.0358c0 1.6568 1.3431 3 3 3h2.6496c.2349 0 .4623.0827.6424.2336l2.065 1.731a1 1 0 0 0 1.2804.0037l2.0983-1.7384a1 1 0 0 1 .638-.2299h2.6263c1.6568 0 3-1.3432 3-3v-2.0179M21.9998 6c0 1.6569-1.3432 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BubbleWideNotificationIcon);
export default ForwardRef;
