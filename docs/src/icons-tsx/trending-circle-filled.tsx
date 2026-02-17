import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TrendingCircleFilledIcon = (
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
      d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10m0-12c0 .5523.4477 1 1 1h.5858l-1.2929 1.2929a.414.414 0 0 1-.5858 0c-.9428-.9428-2.4714-.9428-3.4142 0l-1.25 1.25c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l1.25-1.25a.414.414 0 0 1 .5858 0c.9428.9428 2.4714.9428 3.4142 0L15 12.4142V13c0 .5523.4477 1 1 1s1-.4477 1-1v-3c0-.5523-.4477-1-1-1h-3c-.5523 0-1 .4477-1 1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TrendingCircleFilledIcon);
export default ForwardRef;
