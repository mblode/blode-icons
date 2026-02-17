import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PlayIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.6848 9.4929 10.6475 3.554C8.6526 2.243 6 3.674 6 6.0612v11.8776c0 2.3871 2.6526 3.818 4.6475 2.5071l9.0373-5.9388c1.8033-1.185 1.8033-3.8292 0-5.0142Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PlayIcon);
export default ForwardRef;
