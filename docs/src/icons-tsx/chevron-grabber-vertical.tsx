import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronGrabberVerticalIcon = (
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
      d="m8 9 3.1161-3.116c.4882-.4882 1.2796-.4882 1.7678 0L16 9m-8 6.0001 3.1161 3.1161c.4882.4881 1.2796.4881 1.7678 0L16 15.0001"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronGrabberVerticalIcon);
export default ForwardRef;
