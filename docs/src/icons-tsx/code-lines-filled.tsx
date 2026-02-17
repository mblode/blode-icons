import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CodeLinesFilledIcon = (
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
      d="M2 5c0-.5523.4477-1 1-1h10c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1m15 0c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1M2 12c0-.5523.4477-1 1-1h5c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1m10 0c0-.5523.4477-1 1-1h8c.5523 0 1 .4477 1 1s-.4477 1-1 1h-8c-.5523 0-1-.4477-1-1M2 19c0-.5523.4477-1 1-1h7c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1m12 0c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CodeLinesFilledIcon);
export default ForwardRef;
