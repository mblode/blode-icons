import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WriteIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4.002 4h16m-16 4h6.5M4 12h3.0022m4.8646 9H8.002v-3.8649l7.2027-7.2027c1.0672-1.0672 2.7976-1.0672 3.8648 0 1.0673 1.0673 1.0673 2.7976 0 3.8649z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(WriteIcon);
export default ForwardRef;
