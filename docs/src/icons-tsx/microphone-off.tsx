import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MicrophoneOffIcon = (
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
      d="M12 21v-2m0 0c-3.6782 0-5.8532-2.2549-6.9857-4M12 19c2.2282 0 3.9048-.8275 5.1321-1.8679M9.519 3.8622A3.983 3.983 0 0 1 12 3c2.2092 0 4 1.7909 4 4v3.3433M3 3l5 5m0 0v3c0 2.2091 1.7909 4 4 4a3.98 3.98 0 0 0 2.2841-.7159m-6.284-6.284 6.284 6.284m0 0 2.848 2.848m0 0L21 21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MicrophoneOffIcon);
export default ForwardRef;
