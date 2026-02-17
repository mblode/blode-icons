import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FocusLockFilledIcon = (
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
      d="M5 7c0-1.1046.8954-2 2-2h1c.5523 0 1-.4477 1-1s-.4477-1-1-1H7C4.7909 3 3 4.7909 3 7v1c0 .5523.4477 1 1 1s1-.4477 1-1zM16 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c1.1046 0 2 .8954 2 2v1c0 .5523.4477 1 1 1s1-.4477 1-1V7c0-2.2091-1.7909-4-4-4zM5 16c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 2.2091 1.7909 4 4 4h1c.5523 0 1-.4477 1-1s-.4477-1-1-1H7c-1.1046 0-2-.8954-2-2zM21 16c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 1.1046-.8954 2-2 2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c2.2091 0 4-1.7909 4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M15 10.4998V10c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v.4998c-.6072.4561-1 1.1823-1 2.0002v1c0 1.3807 1.1193 2.5 2.5 2.5h3c1.3807 0 2.5-1.1193 2.5-2.5v-1c0-.8179-.3928-1.5441-1-2.0002M11 10h2c0-.5523-.4477-1-1-1s-1 .4477-1 1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FocusLockFilledIcon);
export default ForwardRef;
