import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SquareArrowInTopLeftFilledIcon = (
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
      d="M3.2929 3.2929c.3905-.3905 1.0237-.3905 1.4142 0L9 7.5858V4c0-.5523.4477-1 1-1s1 .4477 1 1v5c0 1.1046-.8954 2-2 2H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h3.5858l-4.293-4.2929c-.3904-.3905-.3904-1.0237 0-1.4142M13 7c0-.5523.4477-1 1-1h4c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4h-8c-2.2091 0-4-1.7909-4-4v-4c0-.5523.4477-1 1-1s1 .4477 1 1v4c0 1.1046.8954 2 2 2h8c1.1046 0 2-.8954 2-2v-8c0-1.1046-.8954-2-2-2h-4c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SquareArrowInTopLeftFilledIcon);
export default ForwardRef;
