import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowBottomTopFilledIcon = (
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
      d="M7 3c.5523 0 1 .4477 1 1v14.0858l2.2929-2.2929c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142l-2.9393 2.9393c-.9763.9764-2.5593.9764-3.5356 0L2.293 17.2071c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0L6 18.0858V4c0-.5523.4477-1 1-1m8.2322.8535c.9763-.9763 2.5593-.9762 3.5356 0l2.9393 2.9394c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L18 5.9142V20c0 .5523-.4477 1-1 1s-1-.4477-1-1V5.9142l-2.2929 2.293c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowBottomTopFilledIcon);
export default ForwardRef;
