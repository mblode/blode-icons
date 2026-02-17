import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowCornerDownRightFilledIcon = (
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
      d="M4 4c.5523 0 1 .4477 1 1v7c0 1.1046.8954 2 2 2h10.5858l-2.2929-2.2929c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0l4 4c.3905.3905.3905 1.0237 0 1.4142l-4 4c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L17.5858 16H7c-2.2091 0-4-1.7909-4-4V5c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCornerDownRightFilledIcon);
export default ForwardRef;
