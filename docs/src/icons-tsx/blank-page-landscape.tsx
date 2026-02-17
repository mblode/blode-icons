import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BlankPageLandscapeIcon = (
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
      d="M3 7v5.1429a7.714 7.714 0 0 0 3.0857 6.1714A3.43 3.43 0 0 0 8.143 19H18c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3H5c-1.1046 0-2 .8954-2 2m0 0c0 2.6522 1.0536 4.0536 2.929 5.9289L7 14c-1 1.5-1 5 1.5 5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BlankPageLandscapeIcon);
export default ForwardRef;
