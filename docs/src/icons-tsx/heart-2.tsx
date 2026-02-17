import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Heart2Icon = (
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
      d="M12 5.7684C18.1619-.4819 28.7252 11.1257 12 20.5-4.7252 11.1257 5.838-.4818 12 5.7684Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Heart2Icon);
export default ForwardRef;
