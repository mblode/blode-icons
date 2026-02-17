import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PaperPlaneIcon = (
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
      d="M6.0005 12.0001h3m-3 0L4.067 5.8773c-.399-1.2634.9162-2.3859 2.1012-1.7934l13.1491 6.5746c1.1055.5528 1.1055 2.1305 0 2.6833L6.1682 19.9163c-1.185.5925-2.5002-.53-2.1012-1.7934z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PaperPlaneIcon);
export default ForwardRef;
