import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PageAttachmentIcon = (
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
      d="M13 3h3c1.6569 0 3 1.3431 3 3v12c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3v-2m1-7V4.5C6 3.6716 6.6716 3 7.5 3S9 3.6716 9 4.5V9c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3V5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PageAttachmentIcon);
export default ForwardRef;
