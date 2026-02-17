import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowRoundedFilledIcon = (
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
      d="M15.7929 3.7929c.3905-.3905 1.0237-.3905 1.4142 0l3.5 3.5c.3905.3905.3905 1.0237 0 1.4142l-3.5 3.5c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L17.5858 9H13c-2.2091 0-4 1.7909-4 4v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1c0-3.3137 2.6863-6 6-6h4.5858l-1.7929-1.7929c-.3905-.3905-.3905-1.0237 0-1.4142M3 7c.5523 0 1 .4477 1 1v8c0 1.1046.8954 2 2 2h13c.5523 0 1 .4477 1 1s-.4477 1-1 1H6c-2.2091 0-4-1.7909-4-4V8c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRoundedFilledIcon);
export default ForwardRef;
