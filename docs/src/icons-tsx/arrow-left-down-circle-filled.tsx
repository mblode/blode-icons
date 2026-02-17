import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowLeftDownCircleFilledIcon = (
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
      d="M2 12c0 5.5228 4.4772 10 10 10s10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12m6 3c0 .5523.4477 1 1 1h5c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2.5858l4.2929-4.2929c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L10 12.5858V10c0-.5523-.4477-1-1-1s-1 .4477-1 1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowLeftDownCircleFilledIcon);
export default ForwardRef;
