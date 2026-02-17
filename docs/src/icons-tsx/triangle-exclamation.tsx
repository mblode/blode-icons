import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TriangleExclamationIcon = (
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
      d="M12 8.8846v3.0346M12 15h.01M9.4822 4.4325l-6.0307 9.9308C2.224 16.3848 3.6441 19 5.9693 19h12.0614c2.3252 0 3.7454-2.6152 2.5178-4.6367l-6.0307-9.9308c-1.16-1.91-3.8756-1.91-5.0356 0ZM12.25 15a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(TriangleExclamationIcon);
export default ForwardRef;
