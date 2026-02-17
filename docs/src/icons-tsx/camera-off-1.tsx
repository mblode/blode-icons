import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CameraOff1Icon = (
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
      d="M7 7H6c-1.6569 0-3 1.3431-3 3v7c0 1.6569 1.3431 3 3 3h14M7 7 3 3m4 4 13 13m0 0 1 1M9.5 4h3.3944a3 3 0 0 1 2.4962 1.3359l.2392.3588A2.931 2.931 0 0 0 18.0688 7C19.6876 7 21 8.3124 21 9.9312V15m-11-4.2361c-.6137.5493-1 1.3476-1 2.2361 0 1.6569 1.3431 3 3 3 .8885 0 1.6868-.3862 2.2361-1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CameraOff1Icon);
export default ForwardRef;
