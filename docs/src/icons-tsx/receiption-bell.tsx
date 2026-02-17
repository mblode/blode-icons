import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ReceiptionBellIcon = (
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
      d="M3.996 20h16.0001m-7.9978-3v3m0-13V4m-2 0h4M3.9961 16c0-5.5 3.5817-9 8-9s8 3.5 8 9v1h-16z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ReceiptionBellIcon);
export default ForwardRef;
