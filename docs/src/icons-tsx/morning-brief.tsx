import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MorningBriefIcon = (
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
      d="M12 2v2M4.929 4.9287 6.3432 6.343M19.071 4.9287 17.6568 6.343M8.5 16H18M8.5 20H15M2 12h20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
    <circle cx={5.1} cy={16.0004} fill="currentColor" r={1.1} />
    <circle cx={5.1} cy={20.0004} fill="currentColor" r={1.1} />
    <path
      d="M16.5 12c0-2.4853-2.0147-4.5-4.5-4.5S7.5 9.5147 7.5 12"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MorningBriefIcon);
export default ForwardRef;
