import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ScreenCaptureFilledIcon = (
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
      d="M5 6c-.5523 0-1 .4477-1 1s-.4477 1-1 1-1-.4477-1-1c0-1.6569 1.3432-3 3-3 .5523 0 1 .4477 1 1s-.4477 1-1 1m3-1c0-.5523.4477-1 1-1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1m5 0c0-.5523.4477-1 1-1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1c-.5523 0-1-.4477-1-1m5 0c0-.5523.4477-1 1-1 1.6569 0 3 1.3431 3 3 0 .5523-.4477 1-1 1s-1-.4477-1-1-.4477-1-1-1-1-.4477-1-1M3 10c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2c0-.5523.4477-1 1-1m15.5 2c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5M13 15.5c0-3.0376 2.4624-5.5 5.5-5.5s5.5 2.4624 5.5 5.5-2.4624 5.5-5.5 5.5-5.5-2.4624-5.5-5.5m3 0c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5-1.1193 2.5-2.5 2.5-2.5-1.1193-2.5-2.5M3 16c.5523 0 1 .4477 1 1s.4477 1 1 1 1 .4477 1 1-.4477 1-1 1c-1.6568 0-3-1.3431-3-3 0-.5523.4477-1 1-1m5 3c0-.5523.4477-1 1-1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ScreenCaptureFilledIcon);
export default ForwardRef;
