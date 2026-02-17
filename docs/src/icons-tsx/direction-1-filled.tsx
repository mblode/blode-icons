import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Direction1FilledIcon = (
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
      d="M11 5c0-1.1046.8954-2 2-2h5a3 3 0 0 1 2.4 1.2l1.5 2a3 3 0 0 1 0 3.6l-1.5 2A3 3 0 0 1 18 13h-5v7c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3H6a3 3 0 0 1-2.4-1.2l-1.5-2a3 3 0 0 1 0-3.6l1.5-2A3 3 0 0 1 6 7h5zm2 6h5a1 1 0 0 0 .8-.4l1.5-2a1 1 0 0 0 0-1.2l-1.5-2A1 1 0 0 0 18 5h-5z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Direction1FilledIcon);
export default ForwardRef;
