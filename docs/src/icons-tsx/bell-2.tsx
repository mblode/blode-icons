import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Bell2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16 17c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4m10.2996-8.0075.169 3.3787a3 3 0 0 0 .3129 1.1919l1.1331 2.2661A.809.809 0 0 1 19.191 17H4.809a.809.809 0 0 1-.7236-1.1708l1.133-2.2661a3 3 0 0 0 .313-1.1919l.169-3.3787C5.8682 5.6356 8.6389 3 12 3s6.1318 2.6356 6.2996 5.9925Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Bell2Icon);
export default ForwardRef;
