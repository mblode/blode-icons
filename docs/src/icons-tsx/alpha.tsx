import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AlphaIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16 6c-.6144 4.3667-2.7974 13-7 13-3.301 0-5.0295-3.5-4.9996-7C4.0304 8.5 5.8187 5 9 5c6 0 4.4057 14 8 14 1.7418 0 2-2 2-3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AlphaIcon);
export default ForwardRef;
