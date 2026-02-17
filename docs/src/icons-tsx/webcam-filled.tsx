import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WebcamFilledIcon = (
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
      d="M12 8c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M12 2c-4.4183 0-8 3.5817-8 8 0 4.0796 3.0537 7.446 7 7.9381V20H7c-.5523 0-1 .4477-1 1s.4477 1 1 1h10c.5523 0 1-.4477 1-1s-.4477-1-1-1h-4v-2.0619c3.9463-.4921 7-3.8585 7-7.9381 0-4.4183-3.5817-8-8-8m-4 8c0-2.2091 1.7909-4 4-4s4 1.7909 4 4-1.7909 4-4 4-4-1.7909-4-4"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(WebcamFilledIcon);
export default ForwardRef;
