import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PointChartFilledIcon = (
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
      d="M4 3c.5523 0 1 .4477 1 1v13c0 1.1046.8954 2 2 2h13c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-2.2091 0-4-1.7909-4-4V4c0-.5523.4477-1 1-1"
      fill="currentColor"
    />
    <path
      d="M8 14.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5-.6716 1.5-1.5 1.5S8 15.3284 8 14.5M11.5 7c-.8284 0-1.5.6716-1.5 1.5s.6716 1.5 1.5 1.5S13 9.3284 13 8.5 12.3284 7 11.5 7M15 11.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5-.6716 1.5-1.5 1.5-1.5-.6716-1.5-1.5M18.5 4c-.8284 0-1.5.6716-1.5 1.5S17.6716 7 18.5 7 20 6.3284 20 5.5 19.3284 4 18.5 4"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(PointChartFilledIcon);
export default ForwardRef;
