import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const InjectionIcon = (
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
      d="m18 3 3 3M19.5 4.5 17 7M13 4l7 7M14.5003 5.5l-7 7c-1.1046 1.1046-1.1046 2.8954 0 4s2.8954 1.1046 4 0l7-7M3 21l4.5-4.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(InjectionIcon);
export default ForwardRef;
