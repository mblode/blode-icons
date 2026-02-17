import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SleepFilledIcon = (
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
      d="M11 3c0-.5523.4477-1 1-1h3.5a1 1 0 0 1 .8192 1.5735L13.9207 7H15.5c.5523 0 1 .4477 1 1s-.4477 1-1 1H12a1 1 0 0 1-.8192-1.5735L13.5793 4H12c-.5523 0-1-.4477-1-1M3 9c0-.5523.4477-1 1-1h4a1 1 0 0 1 .832 1.5547L5.8686 14H8c.5523 0 1 .4477 1 1s-.4477 1-1 1H4a1 1 0 0 1-.832-1.5547L6.1314 10H4c-.5523 0-1-.4477-1-1m9 4c0-.5523.4477-1 1-1h6a1 1 0 0 1 .8 1.6L15 20h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6a1 1 0 0 1-.8-1.6L17 14h-4c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SleepFilledIcon);
export default ForwardRef;
