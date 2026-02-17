import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowBoxLeftFilledIcon = (
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
      d="M7 5c-1.1046 0-2 .8954-2 2v10c0 1.1046.8954 2 2 2h4.25c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-2.2091 0-4-1.7909-4-4V7c0-2.2091 1.7909-4 4-4h4.25c.5523 0 1 .4477 1 1s-.4477 1-1 1zm7.7929 1.7929c.3905-.3905 1.0237-.3905 1.4142 0l4.5 4.5c.3905.3905.3905 1.0237 0 1.4142l-4.5 4.5c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L17.5858 13H8.75c-.5523 0-1-.4477-1-1s.4477-1 1-1h8.8358l-2.7929-2.7929c-.3905-.3905-.3905-1.0237 0-1.4142"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowBoxLeftFilledIcon);
export default ForwardRef;
