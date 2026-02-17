import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ExpandSimpleFilledIcon = (
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
      d="M12 6c0-.5523.4477-1 1-1h3c1.6569 0 3 1.3431 3 3v3c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-.5523-.4477-1-1-1h-3c-.5523 0-1-.4477-1-1m-6 6c.5523 0 1 .4477 1 1v3c0 .5523.4477 1 1 1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-1.6569 0-3-1.3431-3-3v-3c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ExpandSimpleFilledIcon);
export default ForwardRef;
