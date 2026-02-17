import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Bubble2Icon = (
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
      d="M6.002 4h12c1.6568 0 3 1.3431 3 3v8c0 1.6569-1.3432 3-3 3h-6l-5 3v-3h-1c-1.6569 0-3-1.3431-3-3V7c0-1.6569 1.3431-3 3-3Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Bubble2Icon);
export default ForwardRef;
