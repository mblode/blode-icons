import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowUndoUpIcon = (
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
      d="M6.4998 5 3.5604 7.9393c-.5857.5858-.5857 1.5356 0 2.1214L6.4998 13m-2.5-4h12.5c2.4853 0 4.5 2.0147 4.5 4.5s-2.0147 4.5-4.5 4.5h-4.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowUndoUpIcon);
export default ForwardRef;
