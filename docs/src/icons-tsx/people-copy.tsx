import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PeopleCopyIcon = (
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
      d="M17 7V6c0-1.6569-1.3431-3-3-3H6C4.3431 3 3 4.3431 3 6v8c0 1.6569 1.3431 3 3 3h1m2.5273 4c.2488-2.25 2.1563-4 4.4726-4s4.2238 1.75 4.4725 4M16 12.5c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2m2 8.5h-8c-1.6569 0-3-1.3431-3-3v-8c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PeopleCopyIcon);
export default ForwardRef;
