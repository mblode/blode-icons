import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Voice1FilledIcon = (
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
      d="M9 4c0-.5523-.4477-1-1-1s-1 .4477-1 1v16c0 .5523.4477 1 1 1s1-.4477 1-1zM17 6c0-.5523-.4477-1-1-1s-1 .4477-1 1v12c0 .5523.4477 1 1 1s1-.4477 1-1zM13 8c0-.5523-.4477-1-1-1s-1 .4477-1 1v8c0 .5523.4477 1 1 1s1-.4477 1-1zM5 10c0-.5523-.4477-1-1-1s-1 .4477-1 1v4c0 .5523.4477 1 1 1s1-.4477 1-1zM21 10c0-.5523-.4477-1-1-1s-1 .4477-1 1v4c0 .5523.4477 1 1 1s1-.4477 1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Voice1FilledIcon);
export default ForwardRef;
