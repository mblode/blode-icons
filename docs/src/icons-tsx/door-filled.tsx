import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DoorFilledIcon = (
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
      d="M20 20V6c0-2.2091-1.7909-4-4-4H8C5.7909 2 4 3.7909 4 6v14H3c-.5523 0-1 .4477-1 1s.4477 1 1 1h18c.5523 0 1-.4477 1-1s-.4477-1-1-1zM7 12c0-.5523.4477-1 1-1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(DoorFilledIcon);
export default ForwardRef;
