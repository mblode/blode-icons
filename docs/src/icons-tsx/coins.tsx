import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CoinsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9 16c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6c2.4597 0 4.5737 1.4801 5.5 3.5983M21 14c0 3.3137-2.6863 6-6 6-2.6159 0-4.8409-1.6741-5.6619-4.0094A5.99 5.99 0 0 1 9 14c0-3.2002 2.5055-5.8153 5.6619-5.9906A6 6 0 0 1 15 8c3.3137 0 6 2.6863 6 6Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CoinsIcon);
export default ForwardRef;
