import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Whiteboard2FilledIcon = (
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
      d="M12.9997 3c0-.5523-.4477-1-1-1s-1 .4477-1 1v1H3c-.5523 0-1 .4477-1 1s.4477 1 1 1l-.0003 12C2.4474 18 2 18.4477 2 19s.4477 1 1 1h18c.5523 0 1-.4477 1-1s-.4477-1-1-1h-.0003V6H21c.5523 0 1-.4477 1-1s-.4477-1-1-1h-8.0003z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Whiteboard2FilledIcon);
export default ForwardRef;
