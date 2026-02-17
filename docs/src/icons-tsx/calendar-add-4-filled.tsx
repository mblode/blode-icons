import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalendarAdd4FilledIcon = (
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
      d="M8 2c.5523 0 1 .4477 1 1v1h6V3c0-.5523.4477-1 1-1s1 .4477 1 1v1c2.2091 0 4 1.7909 4 4v9c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4V8c0-2.2091 1.7909-4 4-4V3c0-.5523.4477-1 1-1m4.9991 8c0-.5523-.4477-1-1-1s-1 .4477-1 1v1.5H9.5c-.5523 0-1 .4477-1 1s.4477 1 1 1h1.4991V15c0 .5523.4478 1 1 1s1-.4477 1-1v-1.5H14.5c.5523 0 1-.4477 1-1s-.4477-1-1-1h-1.5009z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CalendarAdd4FilledIcon);
export default ForwardRef;
