import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SlideAddFilledIcon = (
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
      d="M2 6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4 2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4h-8c-2.2091 0-4-1.7909-4-4-2.2091 0-4-1.7909-4-4zm14 0h-6c-2.2091 0-4 1.7909-4 4v6c-1.1046 0-2-.8954-2-2V6c0-1.1046.8954-2 2-2h8c1.1046 0 2 .8954 2 2m-1 5c0-.5523-.4477-1-1-1s-1 .4477-1 1v2h-2c-.5523 0-1 .4477-1 1s.4477 1 1 1h2v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SlideAddFilledIcon);
export default ForwardRef;
