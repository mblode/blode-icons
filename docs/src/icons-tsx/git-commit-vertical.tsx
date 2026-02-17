import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GitCommitVerticalIcon = (
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
      d="M12 3v6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
    <circle cx={12} cy={12} r={3} stroke="currentColor" strokeWidth={2} />
    <path
      d="M12 15v6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(GitCommitVerticalIcon);
export default ForwardRef;
