import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MountainBikeIcon = (
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
      d="m19 15-2.4253-8.0843A2.688 2.688 0 0 0 14 5v0M7 7h3m1 4.5-3-4M16.5 9 5 15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <circle cx={19} cy={15} r={4} stroke="currentColor" strokeWidth={2} />
    <circle cx={5} cy={15} r={4} stroke="currentColor" strokeWidth={2} />
  </svg>
);
const ForwardRef = forwardRef(MountainBikeIcon);
export default ForwardRef;
