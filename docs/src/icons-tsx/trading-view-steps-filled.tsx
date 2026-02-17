import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TradingViewStepsFilledIcon = (
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
      d="M9.5 3c.5523 0 1 .4477 1 1v8c0 .5523-.4477 1-1 1s-1-.4477-1-1V4c0-.5523.4477-1 1-1M4 7c.5523 0 1 .4477 1 1v8c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-.5523.4477-1 1-1m16 0c.5523 0 1 .4477 1 1v8c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-.5523.4477-1 1-1m-5.5 4c.5523 0 1 .4477 1 1v8c0 .5523-.4477 1-1 1s-1-.4477-1-1v-8c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TradingViewStepsFilledIcon);
export default ForwardRef;
