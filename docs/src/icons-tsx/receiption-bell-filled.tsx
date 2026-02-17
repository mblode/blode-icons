import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ReceiptionBellFilledIcon = (
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
      d="M11.002 5v1.0536C6.4461 6.5477 3 10.4216 3 16v1c0 .5523.4477 1 1 1h7.002v1H4c-.5523 0-1 .4477-1 1s.4477 1 1 1h16c.5523 0 1-.4477 1-1s-.4477-1-1-1h-6.998v-1H20c.5523 0 1-.4477 1-1v-1c0-5.5768-3.4441-9.45-7.998-9.946V5h1c.5522 0 1-.4477 1-1s-.4478-1-1-1h-4c-.5523 0-1 .4477-1 1s.4477 1 1 1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ReceiptionBellFilledIcon);
export default ForwardRef;
