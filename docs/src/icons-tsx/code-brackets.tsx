import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CodeBracketsIcon = (
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
      d="m10 20 4-16m4 4 1.9775 1.7578c1.3425 1.1934 1.3425 3.2911 0 4.4845L18 16M6 16l-1.9775-1.7577c-1.3425-1.1934-1.3425-3.2911 0-4.4845L6 8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CodeBracketsIcon);
export default ForwardRef;
