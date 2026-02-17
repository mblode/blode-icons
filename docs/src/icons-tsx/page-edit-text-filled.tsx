import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PageEditTextFilledIcon = (
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
      d="M4 6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4v5.8779c-1.5841-.4725-3.3704-.0833-4.6213 1.1676l-3.5 3.5A3 3 0 0 0 11 18.6668v2.3334c0 .3505.0601.6871.1706.9998H8c-2.2091 0-4-1.7909-4-4zm4 1c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1m1 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M19.1262 15.874a.65.65 0 0 0-.9191-.0001L15 19.0811v.9191h.9191l3.2071-3.2071a.65.65 0 0 0 0-.9191m-2.3333-1.4143c1.0349-1.0348 2.7127-1.0348 3.7475 0s1.0349 2.7127 0 3.7476l-3.5 3.5a1 1 0 0 1-.7071.2929H14c-.5523 0-1-.4477-1-1v-2.3334c0-.2652.1054-.5195.2929-.7071z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PageEditTextFilledIcon);
export default ForwardRef;
