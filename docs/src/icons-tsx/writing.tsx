import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WritingIcon = (
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
      d="M8 12H6c-1.1046 0-2 .8955-2 2s.8954 2 2 2h10c1.1046 0 2 .8955 2 2s-.8954 2-2 2h-4m0-8h1.7573c.7957 0 1.5588-.316 2.1214-.8787L19.5 7.5c.8284-.8285.8284-2.1716 0-3s-2.1716-.8284-3 0l-3.6213 3.6213A3 3 0 0 0 12 10.2426z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(WritingIcon);
export default ForwardRef;
