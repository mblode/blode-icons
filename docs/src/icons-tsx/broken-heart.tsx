import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BrokenHeartIcon = (
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
      d="M12 5.7684C18.1619-.4819 28.7252 11.1257 12 20.5-4.7252 11.1257 5.838-.4818 12 5.7684m0 0c-.8793.9636-1.5124 2.02-2 3.2316l3 3-1 3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BrokenHeartIcon);
export default ForwardRef;
