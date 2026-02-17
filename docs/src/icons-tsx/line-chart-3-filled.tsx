import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LineChart3FilledIcon = (
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
      d="M22 5c0-.5523-.4477-1-1-1s-1 .4477-1 1v14c0 .5523.4477 1 1 1s1-.4477 1-1zM15 8c.5523 0 1 .4477 1 1v10c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-.5523.4477-1 1-1M10 13c0-.5523-.4477-1-1-1s-1 .4477-1 1v6c0 .5523.4477 1 1 1s1-.4477 1-1zM4 17c0-.5523-.4477-1-1-1s-1 .4477-1 1v2c0 .5523.4477 1 1 1s1-.4477 1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(LineChart3FilledIcon);
export default ForwardRef;
