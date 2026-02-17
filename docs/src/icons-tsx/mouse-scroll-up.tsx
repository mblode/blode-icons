import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MouseScrollUpIcon = (
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
      d="M12 11v2m3-9-1.8906-1.2604a2 2 0 0 0-2.2188 0L9 4m3 18c-2.7614 0-5-2.2386-5-5v-5c0-2.7614 2.2386-5 5-5s5 2.2386 5 5v5c0 2.7614-2.2386 5-5 5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MouseScrollUpIcon);
export default ForwardRef;
