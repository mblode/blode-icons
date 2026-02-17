import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowRoundedIcon = (
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
      d="M3 8v8c0 1.6569 1.3431 3 3 3h13M16.5 4.5 20 8m0 0-3.5 3.5M20 8h-7c-2.7614 0-5 2.2386-5 5v1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRoundedIcon);
export default ForwardRef;
