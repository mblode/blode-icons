import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const UsbCFilledIcon = (
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
      d="M0 12c0-3.3137 2.6863-6 6-6h12c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6H6c-3.3137 0-6-2.6863-6-6m6-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h12c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(UsbCFilledIcon);
export default ForwardRef;
