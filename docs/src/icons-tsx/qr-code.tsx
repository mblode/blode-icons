import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const QrCodeIcon = (
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
      d="M14 14v2h2m2-2h2m0 4h-2v2m-4-.01V20m3-10c-1.6569 0-3-1.3431-3-3s1.3431-3 3-3 3 1.3431 3 3-1.3431 3-3 3M7 20c-1.6569 0-3-1.3431-3-3s1.3431-3 3-3 3 1.3431 3 3-1.3431 3-3 3m0-10c-1.6569 0-3-1.3431-3-3s1.3431-3 3-3 3 1.3431 3 3-1.3431 3-3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(QrCodeIcon);
export default ForwardRef;
