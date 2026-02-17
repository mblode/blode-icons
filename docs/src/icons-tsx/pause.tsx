import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PauseIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 6c0-1.1046.8954-2 2-2s2 .8954 2 2v12c0 1.1046-.8954 2-2 2s-2-.8954-2-2zM15 6c0-1.1046.8954-2 2-2s2 .8954 2 2v12c0 1.1046-.8954 2-2 2s-2-.8954-2-2z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PauseIcon);
export default ForwardRef;
