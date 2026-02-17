import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShoppingBag3FilledIcon = (
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
      d="M8 3c-.5523 0-1 .4477-1 1v3H4c-.5523 0-1 .4477-1 1v9c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V8c0-.5523-.4477-1-1-1h-3V4c0-.5523-.4477-1-1-1zm7 4v4c0 .5523.4477 1 1 1s1-.4477 1-1V7zM9 7v4c0 .5523-.4477 1-1 1s-1-.4477-1-1V7zm0 0h6V5H9z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBag3FilledIcon);
export default ForwardRef;
