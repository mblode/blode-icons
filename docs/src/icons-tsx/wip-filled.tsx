import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WipFilledIcon = (
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
      d="M7 2c.5523 0 1 .4477 1 1v1h8V3c0-.5523.4477-1 1-1s1 .4477 1 1v1c2.2091 0 4 1.7909 4 4v2c0 2.2091-1.7909 4-4 4v6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1s.4477-1 1-1v-6H8v6c.5523 0 1 .4477 1 1s-.4477 1-1 1H6c-.5523 0-1-.4477-1-1s.4477-1 1-1v-6c-2.2091 0-4-1.7909-4-4V8c0-2.2091 1.7909-4 4-4V3c0-.5523.4477-1 1-1m.6595 4-3.2041 6h2.259l3.2041-6zm1.609 6h2.259l3.2041-6h-2.259zm4.813 0h2.259l3.2041-6h-2.259z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(WipFilledIcon);
export default ForwardRef;
