import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TextSelectFilledIcon = (
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
      d="M4 2C2.3432 2 1 3.3432 1 5c0 1.3062.8348 2.4175 2 2.8293V16c0 2.2091 1.7909 4 4 4h6c.5523 0 1-.4477 1-1s-.4477-1-1-1H7c-1.1046 0-2-.8954-2-2V7.8293C6.1652 7.4175 7 6.3063 7 5c0-1.6568-1.3431-3-3-3M11 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c1.1046 0 2 .8954 2 2v8.1707c-1.1652.4118-2 1.5231-2 2.8293 0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0-1.3062-.8348-2.4175-2-2.8293V8c0-2.2091-1.7909-4-4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M9 9c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1zM9 13c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TextSelectFilledIcon);
export default ForwardRef;
