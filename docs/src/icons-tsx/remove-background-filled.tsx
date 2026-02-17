import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RemoveBackgroundFilledIcon = (
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
      d="M8.5858 3H7C4.7909 3 3 4.7909 3 7v1.5858zM3 11.4142V17c0 .7418.202 1.4365.5538 2.032L8.19 14.3957A4.48 4.48 0 0 1 7.5 12c0-2.4853 2.0147-4.5 4.5-4.5.8805 0 1.702.253 2.3957.69l4.6363-4.6362A3.98 3.98 0 0 0 17 3h-5.5858zM9.6043 15.81 4.968 20.4462A3.98 3.98 0 0 0 7 21h5.5858L21 12.5858V7a3.98 3.98 0 0 0-.5538-2.032L15.81 9.6043c.4371.6937.69 1.5152.69 2.3957 0 2.4853-2.0147 4.5-4.5 4.5a4.48 4.48 0 0 1-2.3957-.69M17 21h-1.5858L21 15.4142V17c0 2.2091-1.7909 4-4 4"
      fill="currentColor"
    />
    <path
      d="M9.5 12c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5-1.1193 2.5-2.5 2.5-2.5-1.1193-2.5-2.5"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(RemoveBackgroundFilledIcon);
export default ForwardRef;
