import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowTopBottomIcon = (
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
      d="m3 7.5 2.9393-2.9393c.5858-.5858 1.5356-.5858 2.1214 0L11 7.5m2 9 2.9393 2.9393c.5858.5858 1.5356.5858 2.1214 0L21 16.5M7 5v15M17 4v15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowTopBottomIcon);
export default ForwardRef;
