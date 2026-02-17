import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowLeftUpCircleFilledIcon = (
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
      d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12m6-3c0-.5523.4477-1 1-1h5c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2.5858l4.2929 4.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L10 11.4142V14c0 .5523-.4477 1-1 1s-1-.4477-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowLeftUpCircleFilledIcon);
export default ForwardRef;
