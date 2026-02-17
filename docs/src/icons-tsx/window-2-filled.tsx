import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Window2FilledIcon = (
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
      d="M6 4C3.7909 4 2 5.7909 2 8v2h20V8c0-2.2091-1.7909-4-4-4zm0 2c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1m2 1c0-.5523.4477-1 1-1s1 .4477 1 1-.4477 1-1 1-1-.4477-1-1m4-1c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M2 16v-4h20v4c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Window2FilledIcon);
export default ForwardRef;
