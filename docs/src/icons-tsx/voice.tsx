import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VoiceIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M8 4v16M4 10v4m8-6v8m4-10v12m4-8v4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(VoiceIcon);
export default ForwardRef;
