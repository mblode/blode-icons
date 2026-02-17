import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DownsizeFilledIcon = (
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
      d="M10 6c0 2.2091-1.7909 4-4 4H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h2c1.1046 0 2-.8954 2-2V4c0-.5523.4477-1 1-1s1 .4477 1 1zM21 9c0 .5523-.4477 1-1 1h-2c-2.2091 0-4-1.7909-4-4V4c0-.5523.4477-1 1-1s1 .4477 1 1v2c0 1.1046.8954 2 2 2h2c.5523 0 1 .4477 1 1M15 21c-.5523 0-1-.4477-1-1v-2c0-2.2091 1.7909-4 4-4h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-1.1046 0-2 .8954-2 2v2c0 .5523-.4477 1-1 1M9 21c-.5523 0-1-.4477-1-1v-2c0-1.1046-.8954-2-2-2H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h2c2.2091 0 4 1.7909 4 4v2c0 .5523-.4477 1-1 1"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(DownsizeFilledIcon);
export default ForwardRef;
