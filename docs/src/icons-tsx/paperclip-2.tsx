import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Paperclip2Icon = (
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
      d="M7 9v7c0 2.7614 2.2386 5 5 5s5-2.2386 5-5V5.5C17 4.1193 15.8807 3 14.5 3S12 4.1193 12 5.5V15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Paperclip2Icon);
export default ForwardRef;
