import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Camera1Icon = (
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
      d="M3 17V9.9313C3 8.3123 4.3124 7 5.9313 7c.98 0 1.8952-.4898 2.4389-1.3053l.2392-.3588A3 3 0 0 1 11.1056 4h1.7888a3 3 0 0 1 2.4962 1.3359l.2392.3588A2.931 2.931 0 0 0 18.0688 7C19.6876 7 21 8.3124 21 9.9312V17c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M15 13c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Camera1Icon);
export default ForwardRef;
