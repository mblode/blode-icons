import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GamepadControlsRoundDownIcon = (
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
      d="M5.75 14.75c1.5188 0 2.75-1.2312 2.75-2.75S7.2688 9.25 5.75 9.25 3 10.4812 3 12s1.2312 2.75 2.75 2.75ZM18.25 14.75c1.5188 0 2.75-1.2312 2.75-2.75s-1.2312-2.75-2.75-2.75S15.5 10.4812 15.5 12s1.2312 2.75 2.75 2.75ZM12 8.5c1.5188 0 2.75-1.2312 2.75-2.75S13.5188 3 12 3 9.25 4.2312 9.25 5.75 10.4812 8.5 12 8.5Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
    <path
      d="M12 21c1.5188 0 2.75-1.2312 2.75-2.75S13.5188 15.5 12 15.5s-2.75 1.2312-2.75 2.75S10.4812 21 12 21Z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
      style={{
        fill: "currentColor",
        fillOpacity: 1,
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GamepadControlsRoundDownIcon);
export default ForwardRef;
