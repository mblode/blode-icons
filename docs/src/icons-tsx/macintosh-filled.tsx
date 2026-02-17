import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MacintoshFilledIcon = (
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
      d="M4 6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4v9a3.985 3.985 0 0 1-1 2.6458V20c0 1.1046-.8954 2-2 2H7c-1.1046 0-2-.8954-2-2v-2.3542A3.985 3.985 0 0 1 4 15zm4-2c-1.1046 0-2 .8954-2 2v9c0 1.1046.8954 2 2 2h8c1.1046 0 2-.8954 2-2V6c0-1.1046-.8954-2-2-2zM7 6c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1H8c-.5523 0-1-.4477-1-1zm6 9c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MacintoshFilledIcon);
export default ForwardRef;
