import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AudioIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.996 18.5c0 1.3807-1.343 2.5-3 2.5-1.6568 0-3-1.1193-3-2.5s1.3432-2.5 3-2.5c1.657 0 3 1.1193 3 2.5Zm0 0V8.2321a3 3 0 0 1 2.1381-2.8735l5.2873-1.5862c1.2832-.385 2.5747.576 2.5747 1.9157V15.5m0 0c0 1.3807-1.3432 2.5-3 2.5s-3-1.1193-3-2.5 1.3431-2.5 3-2.5 3 1.1193 3 2.5Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AudioIcon);
export default ForwardRef;
