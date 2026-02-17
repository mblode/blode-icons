import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MouseScrollDownIcon = (
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
      d="m15 20-1.8906 1.2604a2 2 0 0 1-2.2188 0L9 20m3-14v2m0 9c-2.7614 0-5-2.2386-5-5V7c0-2.7614 2.2386-5 5-5s5 2.2386 5 5v5c0 2.7614-2.2386 5-5 5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MouseScrollDownIcon);
export default ForwardRef;
