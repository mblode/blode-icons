import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Email2Icon = (
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
      d="M21.001 9c-2.5073 1.8837-5.624 3-9.0015 3s-6.4942-1.1163-9.0014-3m3.0014-4h12c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3h-12c-1.6568 0-3-1.3431-3-3V8c0-1.6569 1.3432-3 3-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Email2Icon);
export default ForwardRef;
