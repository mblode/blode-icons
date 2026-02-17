import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FloppyDisk2FilledIcon = (
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
      d="M10 15c0-1.1046.8954-2 2-2s2 .8954 2 2-.8954 2-2 2-2-.8954-2-2"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M7 3h1v5c0 .5523.4477 1 1 1h6c.5523 0 1-.4477 1-1V3.0074a4 4 0 0 1 2.5858 1.1642l1.2426 1.2426A4 4 0 0 1 21 8.2426V17c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4V7c0-2.2091 1.7909-4 4-4m5 8c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4 4-1.7909 4-4-1.7909-4-4-4"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M10 3h4v4h-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FloppyDisk2FilledIcon);
export default ForwardRef;
