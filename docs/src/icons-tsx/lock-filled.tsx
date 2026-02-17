import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LockFilledIcon = (
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
      clipRule="evenodd"
      d="M12 2C9.2386 2 7 4.2386 7 7v2.126C5.2748 9.57 4 11.1362 4 13v5c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4v-5c0-1.8638-1.2748-3.43-3-3.874V7c0-2.7614-2.2386-5-5-5m3 7V7c0-1.6569-1.3431-3-3-3S9 5.3431 9 7v2zm-3 4c.5523 0 1 .4477 1 1v3c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(LockFilledIcon);
export default ForwardRef;
