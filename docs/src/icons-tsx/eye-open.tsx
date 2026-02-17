import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const EyeOpenIcon = (
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
      d="M15.0001 12c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M21.2246 10.6522c-4.8152-7.5363-13.6338-7.5362-18.449.0001a2.508 2.508 0 0 0 0 2.6955c4.8152 7.5363 13.6338 7.5362 18.449-.0001a2.508 2.508 0 0 0 0-2.6955"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(EyeOpenIcon);
export default ForwardRef;
