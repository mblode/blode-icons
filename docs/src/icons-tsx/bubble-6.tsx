import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Bubble6Icon = (
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
      d="M3 9c0-2.7614 2.2386-5 5-5h8c2.7614 0 5 2.2386 5 5v6c0 2.7614-2.2386 5-5 5H3z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Bubble6Icon);
export default ForwardRef;
