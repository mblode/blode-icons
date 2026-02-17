import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WindIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 12h16c1.1046 0 2-.8954 2-2s-.8954-2-2-2a1.994 1.994 0 0 0-1.4142.5858M3 8h8c1.1046 0 2-.8954 2-2s-.8954-2-2-2a1.994 1.994 0 0 0-1.4142.5858M3 16h12c1.1046 0 2 .8954 2 2s-.8954 2-2 2a1.994 1.994 0 0 1-1.4142-.5858"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(WindIcon);
export default ForwardRef;
