import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PlusLargeFilledIcon = (
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
      d="M12 3c.5523 0 1 .4477 1 1v7h7c.5523 0 1 .4477 1 1s-.4477 1-1 1h-7v7c0 .5523-.4477 1-1 1s-1-.4477-1-1v-7H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h7V4c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PlusLargeFilledIcon);
export default ForwardRef;
