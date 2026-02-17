import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronLargeRightFilledIcon = (
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
      d="M9.5145 2.126c.4828-.2682 1.0916-.0942 1.3598.3885l4.1906 7.5431a4 4 0 0 1 0 3.8852l-4.1906 7.543c-.2682.4828-.877.6568-1.3598.3885-.4827-.2682-.6567-.877-.3885-1.3598l4.1906-7.543a2 2 0 0 0 0-1.9426L9.126 3.4859c-.2682-.4829-.0942-1.0917.3885-1.3599"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronLargeRightFilledIcon);
export default ForwardRef;
