import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Store3Icon = (
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
      d="M8 19H6c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3h-2m-8 0v-5c0-1.6569 1.3431-3 3-3h1m-4 8h4m4 0v-5c0-1.6569-1.3431-3-3-3h-1m4 8h-4m0-8v8"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Store3Icon);
export default ForwardRef;
