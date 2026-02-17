import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SwordFilledIcon = (
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
      d="M5.707 10.2929a1 1 0 0 0-1.5392.1524 3.612 3.612 0 0 0 .0662 4.1029l.9597 1.3437L3 18.0858c-.7811.781-.7811 2.0474 0 2.8284L3.0856 21c.781.7811 2.0474.7811 2.8285 0l2.1939-2.1939 1.3436.9598a3.612 3.612 0 0 0 4.1029.0662 1 1 0 0 0 .1525-1.5392zM15.5722 3a4 4 0 0 0-3.2887 1.7232L8.2031 10.617l5.1803 5.1802 5.8938-4.0803a4 4 0 0 0 1.7232-3.2888V4c0-.5523-.4477-1-1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SwordFilledIcon);
export default ForwardRef;
