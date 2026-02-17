import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const EscIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.0233 4.5C4.5983 6.1124 3 8.8695 3 12c0 4.9706 4.0294 9 9 9s9-4.0294 9-9c0-3.1305-1.5983-5.8876-4.0233-7.5M12 2v5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(EscIcon);
export default ForwardRef;
