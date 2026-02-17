import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SlidesWideAddIcon = (
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
      d="M7 15H6c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v1m-5 5h2m0 0h2m-2 0v-2m0 2v2m7 0v-4c0-1.6569-1.3431-3-3-3h-8c-1.6569 0-3 1.3431-3 3v4c0 1.6569 1.3431 3 3 3h8c1.6569 0 3-1.3431 3-3Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SlidesWideAddIcon);
export default ForwardRef;
