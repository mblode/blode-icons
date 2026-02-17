import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowBoxRightFilledIcon = (
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
      d="M17 5h-2c-.5523 0-1-.4477-1-1s.4477-1 1-1h2c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4h-2c-.5523 0-1-.4477-1-1s.4477-1 1-1h2c1.1046 0 2-.8954 2-2V7c0-1.1046-.8954-2-2-2m-6.7071 2.7929c.3905-.3905 1.0237-.3905 1.4142 0l3.5 3.5a1 1 0 0 1 0 1.4142l-3.5 3.5c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L12.0858 13H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h8.0858l-1.7929-1.7929c-.3905-.3905-.3905-1.0237 0-1.4142"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowBoxRightFilledIcon);
export default ForwardRef;
