import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GamepadControlsRoundUpIcon = (
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
      d="M5.75 9.25c1.5188 0 2.75 1.2312 2.75 2.75s-1.2312 2.75-2.75 2.75S3 13.5188 3 12s1.2312-2.75 2.75-2.75ZM18.25 9.25C19.7688 9.25 21 10.4812 21 12s-1.2312 2.75-2.75 2.75S15.5 13.5188 15.5 12s1.2312-2.75 2.75-2.75ZM12 15.5c1.5188 0 2.75 1.2312 2.75 2.75S13.5188 21 12 21s-2.75-1.2312-2.75-2.75S10.4812 15.5 12 15.5Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
    <path
      d="M12 3c1.5188 0 2.75 1.2312 2.75 2.75S13.5188 8.5 12 8.5 9.25 7.2688 9.25 5.75 10.4812 3 12 3Z"
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
const ForwardRef = forwardRef(GamepadControlsRoundUpIcon);
export default ForwardRef;
