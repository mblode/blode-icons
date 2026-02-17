import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PersonSimpleIcon = (
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
    <circle cx={12} cy={8} r={4} stroke="currentColor" strokeWidth={2} />
    <path
      d="M20 21c0-4.4183-3.5817-8-8-8s-8 3.5817-8 8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PersonSimpleIcon);
export default ForwardRef;
