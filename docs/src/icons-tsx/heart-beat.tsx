import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HeartBeatIcon = (
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
      d="M16 12h-1.5L13 14l-2.5-4-1.25 2H8m4-6.2316C18.1619-.4819 28.7252 11.1257 12 20.5-4.7252 11.1257 5.838-.4818 12 5.7684"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(HeartBeatIcon);
export default ForwardRef;
