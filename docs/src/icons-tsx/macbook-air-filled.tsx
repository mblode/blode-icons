import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MacbookAirFilledIcon = (
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
      d="M1 18.5a.5.5 0 0 1 .5-.5h7.264a1 1 0 0 1 .4472.1056l.5777.2888a1 1 0 0 0 .4472.1056h3.5278a1 1 0 0 0 .4472-.1056l.5778-.2888A1 1 0 0 1 15.2361 18H22.5a.5.5 0 0 1 .5.5v.5c0 .5523-.4477 1-1 1H2c-.5523 0-1-.4477-1-1zM5 4C3.3432 4 2 5.3431 2 7v8.5c0 .5523.4477 1 1 1h18c.5523 0 1-.4477 1-1V7c0-1.6569-1.3431-3-3-3z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MacbookAirFilledIcon);
export default ForwardRef;
