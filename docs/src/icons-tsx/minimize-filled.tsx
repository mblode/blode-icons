import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MinimizeFilledIcon = (
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
      d="M9 13c1.6569 0 3 1.3431 3 3v3c0 1.6569-1.3431 3-3 3H5c-1.6568 0-3-1.3431-3-3v-3c0-1.6569 1.3432-3 3-3z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M20 7c0-1.1046-.8954-2-2-2H7c-1.1046 0-2 .8954-2 2v3c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-2.2091 1.7909-4 4-4h11c2.2091 0 4 1.7909 4 4v5c0 2.2091-1.7909 4-4 4h-3c-.5523 0-1-.4477-1-1s.4477-1 1-1h3c1.1046 0 2-.8954 2-2z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M14 12c-.5523 0-1-.4477-1-1V8c0-.5523.4477-1 1-1s1 .4477 1 1v.5858l1.2929-1.293c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L16.4142 10H17c.5523 0 1 .4477 1 1s-.4477 1-1 1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MinimizeFilledIcon);
export default ForwardRef;
