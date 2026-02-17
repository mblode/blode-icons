import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PrinterFilledIcon = (
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
      d="M9 2C7.3431 2 6 3.3432 6 5v1c-2.2091 0-4 1.7909-4 4v5c0 1.6569 1.3432 3 3 3h1v1c0 1.6569 1.3431 3 3 3h6c1.6569 0 3-1.3431 3-3v-1h1c1.6569 0 3-1.3431 3-3v-5c0-2.2091-1.7909-4-4-4V5c0-1.6568-1.3431-3-3-3zm7 4V5c0-.5523-.4477-1-1-1H9c-.5523 0-1 .4477-1 1v1zm0 9H8v4c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1zM6 11c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PrinterFilledIcon);
export default ForwardRef;
