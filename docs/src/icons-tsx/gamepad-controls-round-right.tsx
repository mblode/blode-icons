import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GamepadControlsRoundRightIcon = (
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
      d="M14.75 5.75c0 1.5188-1.2312 2.75-2.75 2.75S9.25 7.2688 9.25 5.75 10.4812 3 12 3s2.75 1.2312 2.75 2.75ZM14.75 18.25c0 1.5188-1.2312 2.75-2.75 2.75s-2.75-1.2312-2.75-2.75S10.4812 15.5 12 15.5s2.75 1.2312 2.75 2.75ZM8.5 12c0 1.5188-1.2312 2.75-2.75 2.75S3 13.5188 3 12s1.2312-2.75 2.75-2.75S8.5 10.4812 8.5 12Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
    <path
      d="M21 12c0 1.5188-1.2312 2.75-2.75 2.75S15.5 13.5188 15.5 12s1.2312-2.75 2.75-2.75S21 10.4812 21 12Z"
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
const ForwardRef = forwardRef(GamepadControlsRoundRightIcon);
export default ForwardRef;
