import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SlideTallAddFilledIcon = (
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
      d="M8 22c-2.2091 0-4-1.7909-4-4V6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4v12c0 2.2091-1.7909 4-4 4zm1-11c-.5523 0-1 .4477-1 1s.4477 1 1 1h2v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2V9c0-.5523-.4477-1-1-1s-1 .4477-1 1v2z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SlideTallAddFilledIcon);
export default ForwardRef;
