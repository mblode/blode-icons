import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SidebarLeftArrowIcon = (
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
      d="M9 4H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h2M9 4h8c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3H9M9 4v16"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="m15.5 10-2 2 2 2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SidebarLeftArrowIcon);
export default ForwardRef;
