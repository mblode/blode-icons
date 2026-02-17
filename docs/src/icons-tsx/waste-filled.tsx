import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WasteFilledIcon = (
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
      d="M3 5c0-.5523.4477-1 1-1h16c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M17 16.5c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3 3-1.3431 3-3-1.3431-3-3-3M8.6057 2a4 4 0 0 0-3.3283 1.7812L3.9798 5.7278 3.998 6H20.005l.0257-.2568-1.308-1.962A4 4 0 0 0 15.3946 2z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M19.8051 8H4.1312l.6844 10.2661C4.9557 20.3673 6.701 22 8.8068 22h3.8621C12.2435 21.2646 12 20.4107 12 19.5c0-2.7614 2.2386-5 5-5 .7534 0 1.4679.1666 2.1086.465z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(WasteFilledIcon);
export default ForwardRef;
