import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MouseIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 7v2m0 12c-3.3137 0-6-2.6863-6-6V9c0-3.3137 2.6863-6 6-6s6 2.6863 6 6v6c0 3.3137-2.6863 6-6 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MouseIcon);
export default ForwardRef;
