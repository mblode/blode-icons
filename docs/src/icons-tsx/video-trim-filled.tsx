import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VideoTrimFilledIcon = (
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
      d="M15 2c-.5523 0-1 .4477-1 1v1H6C3.7909 4 2 5.7909 2 8v8c0 2.2091 1.7909 4 4 4h8v1c0 .5523.4477 1 1 1s1-.4477 1-1V3c0-.5523-.4477-1-1-1M7.5668 9.0987a1 1 0 0 1 1.0579.1204l2.5 2a1 1 0 0 1 0 1.5618l-2.5 2A1.0001 1.0001 0 0 1 7 14v-4a1 1 0 0 1 .5668-.9013"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M22 16c0 2.2091-1.7909 4-4 4V4c2.2091 0 4 1.7909 4 4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(VideoTrimFilledIcon);
export default ForwardRef;
