import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GaugeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10 10 5.75 5.75M12 5V3c4.9706 0 9 4.0294 9 9s-4.0294 9-9 9-9-4.0294-9-9c0-1.0519.1805-2.0617.5121-3M14.5 12c0 1.3807-1.1193 2.5-2.5 2.5S9.5 13.3807 9.5 12s1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(GaugeIcon);
export default ForwardRef;
