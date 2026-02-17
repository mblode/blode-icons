import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AudioBarsIcon = (
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
      d="M4 16V8m4 10V6m4 15V3m4 15V6m4 10V8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AudioBarsIcon);
export default ForwardRef;
