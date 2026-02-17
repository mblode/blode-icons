import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RecKeyframeIcon = (
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
      d="M14.1209 3.8714c-1.1716-1.1716-3.0711-1.1716-4.2427 0L3.871 9.8787c-1.1716 1.1716-1.1716 3.071 0 4.2426l6.0073 6.0074c1.1716 1.1716 3.0711 1.1716 4.2427 0l6.0073-6.0074c1.1716-1.1715 1.1716-3.071 0-4.2426z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <circle cx={12} cy={12} r={2.5} stroke="currentColor" strokeWidth={2} />
  </svg>
);
const ForwardRef = forwardRef(RecKeyframeIcon);
export default ForwardRef;
