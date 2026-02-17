import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowCornerDownLeftFilledIcon = (
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
      d="M20 4c-.5523 0-1 .4477-1 1v7c0 1.1046-.8954 2-2 2H6.4142l2.293-2.2929c.3904-.3905.3904-1.0237 0-1.4142-.3906-.3905-1.0238-.3905-1.4143 0l-4 4c-.3905.3905-.3905 1.0237 0 1.4142l4 4c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L6.4142 16H17c2.2091 0 4-1.7909 4-4V5c0-.5523-.4477-1-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCornerDownLeftFilledIcon);
export default ForwardRef;
