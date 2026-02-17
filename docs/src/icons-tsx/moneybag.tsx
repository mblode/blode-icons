import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MoneybagIcon = (
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
      d="M9.5 8h5m-5 0S4 11 4 16c0 4.0207 3.9793 5 8 5s8-.9793 8-5c0-5-5.5-8-5.5-8m-5 0-.6641-1.771c-.4896-1.3055.0181-2.776 1.3845-3.0531C10.7359 3.0713 11.3323 3 12 3s1.2641.0713 1.7796.1759c1.3664.2771 1.8741 1.7476 1.3845 3.0531L14.5 8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MoneybagIcon);
export default ForwardRef;
