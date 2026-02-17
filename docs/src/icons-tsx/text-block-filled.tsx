import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TextBlockFilledIcon = (
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
      d="M6 4C4.3431 4 3 5.3431 3 7s1.3431 3 3 3 3-1.3431 3-3-1.3431-3-3-3M13 4.5c-.5523 0-1 .4477-1 1s.4477 1 1 1h7c.5523 0 1-.4477 1-1s-.4477-1-1-1zM13 7.5c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1zM6 14c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3 3-1.3431 3-3-1.3431-3-3-3M13 14.5c-.5523 0-1 .4477-1 1s.4477 1 1 1h7c.5523 0 1-.4477 1-1s-.4477-1-1-1zM13 17.5c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TextBlockFilledIcon);
export default ForwardRef;
