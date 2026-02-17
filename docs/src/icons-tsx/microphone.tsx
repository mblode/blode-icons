import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MicrophoneIcon = (
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
      d="M12.0013 19v2m0-2c-3.6782 0-5.8532-2.2549-6.9857-4m6.9857 4c3.6782 0 5.8532-2.2549 6.9857-4m-2.9857-8v4c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4V7c0-2.2091 1.7908-4 4-4 2.2091 0 4 1.7909 4 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MicrophoneIcon);
export default ForwardRef;
