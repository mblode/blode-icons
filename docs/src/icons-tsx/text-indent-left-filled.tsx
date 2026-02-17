import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TextIndentLeftFilledIcon = (
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
      d="M9 6c0-.5523.4477-1 1-1h11c.5523 0 1 .4477 1 1s-.4477 1-1 1H10c-.5523 0-1-.4477-1-1M2.5898 8.428a1 1 0 0 1 1.0736.1637l3 2.6601a.9998.9998 0 0 1-.0014 1.4977l-3 2.65A1.0001 1.0001 0 0 1 2 14.65V9.34a1 1 0 0 1 .5898-.912M9 12c0-.5523.4477-1 1-1h11c.5523 0 1 .4477 1 1s-.4477 1-1 1H10c-.5523 0-1-.4477-1-1m0 6c0-.5523.4477-1 1-1h11c.5523 0 1 .4477 1 1s-.4477 1-1 1H10c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TextIndentLeftFilledIcon);
export default ForwardRef;
