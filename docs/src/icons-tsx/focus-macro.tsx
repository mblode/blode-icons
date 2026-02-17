import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FocusMacroIcon = (
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
      d="M12 14v2m0-2c-1.6569 0-3-1.3431-3-3V8.75l1.75.75L12 8.25l1.25 1.25L15 8.75V11c0 1.6569-1.3431 3-3 3M4 8V7c0-1.6569 1.3431-3 3-3h1M4 16v1c0 1.6569 1.3431 3 3 3h1m8-16h1c1.6569 0 3 1.3431 3 3v1m0 8v1c0 1.6569-1.3431 3-3 3h-1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FocusMacroIcon);
export default ForwardRef;
