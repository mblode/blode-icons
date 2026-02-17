import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WindowCursorFilledIcon = (
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
      d="M2 8c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v4.25c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-1.1046-.8954-2-2-2H6c-1.1046 0-2 .8954-2 2v9c0 1.1046.8954 2 2 2h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H6c-2.2091 0-4-1.7909-4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M5.5 8.75c0 .6904.5596 1.25 1.25 1.25S8 9.4404 8 8.75 7.4404 7.5 6.75 7.5 5.5 8.0596 5.5 8.75M9 8.75c0 .6904.5596 1.25 1.25 1.25s1.25-.5596 1.25-1.25-.5596-1.25-1.25-1.25S9 8.0596 9 8.75M12.5 8.75c0 .6904.5596 1.25 1.25 1.25S15 9.4404 15 8.75s-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25M15.7941 14.5442a1.0001 1.0001 0 0 0-1.2499 1.2499l2 6.5a1 1 0 0 0 1.8503.1531l1.3509-2.7018 2.7018-1.3509a1 1 0 0 0-.1531-1.8503z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(WindowCursorFilledIcon);
export default ForwardRef;
