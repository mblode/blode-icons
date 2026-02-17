import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowWallLeftFilledIcon = (
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
      d="M3 4c.5523 0 1 .4477 1 1v14c0 .5523-.4477 1-1 1s-1-.4477-1-1V5c0-.5523.4477-1 1-1m8.4571 3.0429c.3905.3905.3905 1.0237 0 1.4142L8.9142 11H21c.5523 0 1 .4477 1 1s-.4477 1-1 1H8.9142l2.5429 2.5429c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3.1893-3.1894c-.9764-.9763-.9763-2.5592 0-3.5355l3.1893-3.1893c.3905-.3905 1.0237-.3905 1.4142 0"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowWallLeftFilledIcon);
export default ForwardRef;
