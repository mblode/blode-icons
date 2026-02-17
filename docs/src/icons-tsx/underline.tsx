import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const UnderlineIcon = (
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
      d="M6 21h12M6 4v8c0 3.3137 2.6863 6 6 6s6-2.6863 6-6V4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(UnderlineIcon);
export default ForwardRef;
