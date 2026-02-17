import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Paperclip1Icon = (
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
      d="M6 11v4c0 3.3137 2.6863 6 6 6s6-2.6863 6-6V7c0-2.2091-1.7909-4-4-4s-4 1.7909-4 4v8c0 1.1046.8954 2 2 2s2-.8954 2-2V7"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Paperclip1Icon);
export default ForwardRef;
