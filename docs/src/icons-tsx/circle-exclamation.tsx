import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CircleExclamationIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    className="lucide lucide-circle-alert"
    fill="none"
    height={24}
    ref={ref}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <path d="M12 8v4M12 16h.01" />
  </svg>
);
const ForwardRef = forwardRef(CircleExclamationIcon);
export default ForwardRef;
