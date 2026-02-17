import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GrowthIcon = (
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
      d="M12 12v-1c0-3.866-3.134-7-7-7H4v1c0 3.866 3.134 7 7 7zm0 0v2m0 1h1c3.866 0 7-3.134 7-7V7h-1c-3.866 0-7 3.134-7 7m0 1v-1m0 1v5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(GrowthIcon);
export default ForwardRef;
