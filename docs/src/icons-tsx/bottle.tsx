import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BottleIcon = (
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
      d="M10 2v3.7574a3 3 0 0 1-.8787 2.1213L7.8787 9.1213A3 3 0 0 0 7 11.2426V19c0 1.6569 1.3431 3 3 3h4c1.6569 0 3-1.3431 3-3v-7.7574a3 3 0 0 0-.8787-2.1213l-1.2426-1.2426A3 3 0 0 1 14 5.7574V2m-4 0h4m-4 0h-.5M14 2h.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BottleIcon);
export default ForwardRef;
