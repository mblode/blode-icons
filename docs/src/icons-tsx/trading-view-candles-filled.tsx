import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TradingViewCandlesFilledIcon = (
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
      d="M8 3c0-.5523-.4477-1-1-1s-1 .4477-1 1v6.126C4.2748 9.57 3 11.1362 3 13v2c0 1.8638 1.2748 3.4299 3 3.874V21c0 .5523.4477 1 1 1s1-.4477 1-1v-2.126c1.7252-.4441 3-2.0102 3-3.874v-2c0-1.8638-1.2748-3.43-3-3.874zM18 3c0-.5523-.4477-1-1-1s-1 .4477-1 1v2.126C14.2748 5.57 13 7.1362 13 9v6c0 1.8638 1.2748 3.4299 3 3.874V21c0 .5523.4477 1 1 1s1-.4477 1-1v-2.126c1.7252-.4441 3-2.0102 3-3.874V9c0-1.8638-1.2748-3.43-3-3.874z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TradingViewCandlesFilledIcon);
export default ForwardRef;
