import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MathEqualsFilledIcon = (
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
      d="M4 9c0-.5523.4477-1 1-1h14c.5523 0 1 .4477 1 1s-.4477 1-1 1H5c-.5523 0-1-.4477-1-1m0 6c0-.5523.4477-1 1-1h14c.5523 0 1 .4477 1 1s-.4477 1-1 1H5c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MathEqualsFilledIcon);
export default ForwardRef;
