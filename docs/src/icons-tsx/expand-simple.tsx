import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ExpandSimpleIcon = (
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
      d="M6 13v3c0 1.1046.8954 2 2 2h3m2-12h3c1.1046 0 2 .8954 2 2v3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ExpandSimpleIcon);
export default ForwardRef;
