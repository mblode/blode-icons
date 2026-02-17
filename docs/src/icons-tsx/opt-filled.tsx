import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const OptFilledIcon = (
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
      d="M3 5c0-.5523.4477-1 1-1h2.259a4 4 0 0 1 3.473 2.0154l6.2725 10.9769A2 2 0 0 0 17.741 18H20c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2.259a4 4 0 0 1-3.473-2.0154L7.9955 7.0077A2 2 0 0 0 6.259 6H4c-.5523 0-1-.4477-1-1m12 0c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(OptFilledIcon);
export default ForwardRef;
