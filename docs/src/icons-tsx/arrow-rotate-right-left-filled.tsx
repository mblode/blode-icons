import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowRotateRightLeftFilledIcon = (
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
      d="M7.0428 17C8.324 18.2359 10.0895 19 12 19c3.866 0 7-3.134 7-7 0-.5523.4477-1 1-1s1 .4477 1 1c0 4.9706-4.0294 9-9 9-2.2765 0-4.3922-.8463-6.0001-2.2442V20c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3c0-1.1046.8954-2 2-2h2.75c.5523 0 1 .4477 1 1s-.4477 1-1 1zM5 12c0 .5523-.4477 1-1 1s-1-.4477-1-1c0-4.9706 4.0294-9 9-9 2.282 0 4.4024.8504 6.0117 2.2543V4c0-.5523.4477-1 1-1s1 .4477 1 1v3c0 1.1046-.8954 2-2 2h-3c-.5523 0-1-.4477-1-1s.4477-1 1-1h1.9455C15.676 5.7641 13.9105 5 12 5c-3.866 0-7 3.134-7 7"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRotateRightLeftFilledIcon);
export default ForwardRef;
