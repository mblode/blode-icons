import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BuildingsFilledIcon = (
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
      d="M3 7c0-2.2091 1.7909-4 4-4h4c2.2091 0 4 1.7909 4 4h2c2.2091 0 4 1.7909 4 4v7h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H2c-.5523 0-1-.4477-1-1s.4477-1 1-1h1zm12 11h4v-7c0-1.1046-.8954-2-2-2h-2zM7 9c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BuildingsFilledIcon);
export default ForwardRef;
