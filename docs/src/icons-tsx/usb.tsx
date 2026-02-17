import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const UsbIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10 6v1m4-1v1M4 10h16v8c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3zm2-7h12v7H6z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(UsbIcon);
export default ForwardRef;
