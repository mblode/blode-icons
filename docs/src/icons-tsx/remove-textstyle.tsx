import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RemoveTextstyleIcon = (
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
      d="M9 4h3m0 0h7m-7 0-.375 3M10 20l1.0224-8.1789M3 4l17 15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(RemoveTextstyleIcon);
export default ForwardRef;
