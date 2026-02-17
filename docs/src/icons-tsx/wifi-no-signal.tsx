import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WifiNoSignalIcon = (
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
      d="M14.8281 13.8281 9.1713 8.1713M9.1719 13.8286l5.6568-5.6568M12 18.75h.01m.24 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(WifiNoSignalIcon);
export default ForwardRef;
