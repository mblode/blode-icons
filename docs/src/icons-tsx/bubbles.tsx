import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubblesIcon = (
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
      d="M16.9998 14h1.5022c1.3807 0 2.5-1.1193 2.5-2.5v-5c0-1.3807-1.1193-2.5-2.5-2.5h-9c-1.3808 0-2.5 1.1193-2.5 2.5V8m7.5 0h-9c-1.3808 0-2.5 1.1193-2.5 2.5v5c0 1.3807 1.1192 2.5 2.5 2.5h.5v2.5l4.5-2.5h4c1.3807 0 2.5-1.1193 2.5-2.5v-5c0-1.3807-1.1193-2.5-2.5-2.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BubblesIcon);
export default ForwardRef;
