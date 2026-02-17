import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowWallRightFilledIcon = (
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
      d="M22 5c0-.5523-.4477-1-1-1s-1 .4477-1 1v14c0 .5523.4477 1 1 1s1-.4477 1-1zM13.9571 7.0429c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142L15.0858 11H3c-.5523 0-1 .4477-1 1s.4477 1 1 1h12.0858l-2.5429 2.5429c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l3.1894-3.1894c.9763-.9763.9763-2.5592-.0001-3.5355z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowWallRightFilledIcon);
export default ForwardRef;
