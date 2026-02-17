import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LoginIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15 3h4c1.1046 0 2 .8954 2 2v14c0 1.1046-.8954 2-2 2h-4M10 17l5-5-5-5M15 12H3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(LoginIcon);
export default ForwardRef;
