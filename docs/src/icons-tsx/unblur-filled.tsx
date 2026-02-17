import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const UnblurFilledIcon = (
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
      d="M9.5 6.25c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M6 6.25c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M9.5 17.75c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M9.25 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M3 10a.75.75 0 1 1-1.5 0A.75.75 0 0 1 3 10M3 14a.75.75 0 1 1-1.5 0A.75.75 0 0 1 3 14M9.25 20.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M10 10c0 .8284-.6716 1.5-1.5 1.5S7 10.8284 7 10s.6716-1.5 1.5-1.5S10 9.1716 10 10M10 14c0 .8284-.6716 1.5-1.5 1.5S7 14.8284 7 14s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5M6 10c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M6 14c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M6 17.75c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M12 2c-.5523 0-1 .4477-1 1v18c0 .5523.4477 1 1 1 5.5228 0 10-4.4772 10-10S17.5228 2 12 2"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(UnblurFilledIcon);
export default ForwardRef;
