import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SplitFilledIcon = (
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
      d="M12 2c.5523 0 1 .4477 1 1v18c0 .5523-.4477 1-1 1s-1-.4477-1-1V3c0-.5523.4477-1 1-1M2 8c0-2.2091 1.7909-4 4-4h3v16H6c-2.2091 0-4-1.7909-4-4zm13-4h3c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4h-3z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SplitFilledIcon);
export default ForwardRef;
