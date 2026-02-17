import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DresserFilledIcon = (
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
      d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v3H3zm7-1c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1M3 12v3c0 1.8666 1.2785 3.4346 3.0076 3.8759A1 1 0 0 0 6 19v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h8v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2q0-.063-.0076-.1241C19.7215 18.4346 21 16.8666 21 15v-3zm8 2c-.5523 0-1 .4477-1 1s.4477 1 1 1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(DresserFilledIcon);
export default ForwardRef;
