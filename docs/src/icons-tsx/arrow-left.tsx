import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowLeftIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    className="lucide lucide-arrow-left"
    fill="none"
    height={24}
    ref={ref}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m12 19-7-7 7-7M19 12H5" />
  </svg>
);
const ForwardRef = forwardRef(ArrowLeftIcon);
export default ForwardRef;
