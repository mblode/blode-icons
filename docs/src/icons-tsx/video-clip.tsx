import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VideoClipIcon = (
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
      d="M4 12h4m-4 0V8m0 4v4m4-4h8m-8 0v4m0-4V8m8 4h4m-4 0v4.4444M16 12V8m4 4V8m0 4v4.4444M16 20h1c1.6569 0 3-1.3431 3-3v-.5556M16 20v-3.5556M16 20H8m8-16h1c1.6569 0 3 1.3431 3 3v1m-4-4v4m0-4H8m8 4h4m-4 8.4444h4M8 20H7c-1.6569 0-3-1.3431-3-3v-1m4 4v-4M8 4H7C5.3431 4 4 5.3431 4 7v1m4-4v4M4 8h4m-4 8h4"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(VideoClipIcon);
export default ForwardRef;
