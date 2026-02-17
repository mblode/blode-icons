import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TrophyIcon = (
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
      d="M12.0039 17v-3M18 5h1c1.1046 0 2 .8954 2 2 0 1.6569-1.3431 3-3 3M6 5H5c-1.1046 0-2 .8954-2 2 0 1.6569 1.3431 3 3 3m6 4c-3.3137 0-6-2.6863-6-6V6c0-1.6569 1.3431-3 3-3h6c1.6569 0 3 1.3431 3 3v2c0 3.3137-2.6863 6-6 6Zm5 5c0-1.1046-.8954-2-2-2H9c-1.1046 0-2 .8954-2 2s.8954 2 2 2h6c1.1046 0 2-.8954 2-2Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TrophyIcon);
export default ForwardRef;
