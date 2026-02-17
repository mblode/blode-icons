import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ItalicIcon = (
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
      d="M10 4h4.5M19 4h-4.5m0 0-5 16m0 0H5m4.5 0H14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ItalicIcon);
export default ForwardRef;
