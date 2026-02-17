import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CopySimpleIcon = (
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
    <rect
      height={11}
      rx={2}
      stroke="currentColor"
      strokeWidth={2}
      width={11}
      x={9}
      y={9}
    />
    <path
      d="M5 15H4c-1.1046 0-2-.8954-2-2V4c0-1.1046.8954-2 2-2h9c1.1046 0 2 .8954 2 2v1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CopySimpleIcon);
export default ForwardRef;
