import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const StopCircleFilledIcon = (
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
      d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10M10.5 9.5c-.5523 0-1 .4477-1 1v3c0 .5523.4477 1 1 1h3c.5523 0 1-.4477 1-1v-3c0-.5523-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(StopCircleFilledIcon);
export default ForwardRef;
