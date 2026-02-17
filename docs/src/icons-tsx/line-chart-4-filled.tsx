import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LineChart4FilledIcon = (
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
      d="M3 4c.5523 0 1 .4477 1 1v14c0 .5523-.4477 1-1 1s-1-.4477-1-1V5c0-.5523.4477-1 1-1m6 4c.5523 0 1 .4477 1 1v10c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-.5523.4477-1 1-1m6 4c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6c0-.5523.4477-1 1-1m6 4c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(LineChart4FilledIcon);
export default ForwardRef;
