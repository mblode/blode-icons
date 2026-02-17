import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SidebarWideLeftArrowIcon = (
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
      d="m15 10-2 2 2 2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M8 5H6C4.3431 5 3 6.3431 3 8v8c0 1.6569 1.3431 3 3 3h2M8 5h10c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3H8M8 5v14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SidebarWideLeftArrowIcon);
export default ForwardRef;
