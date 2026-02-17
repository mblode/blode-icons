import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FridgeFilledIcon = (
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
      d="M4 6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4v4H4zm12 0c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 .5523.4477 1 1 1s1-.4477 1-1zM4 12v6c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4v-6zm11 2c.5523 0 1 .4477 1 1v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FridgeFilledIcon);
export default ForwardRef;
