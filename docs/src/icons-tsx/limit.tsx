import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LimitIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m11.9986 13-3-3m-3.7071 9c-3.1662-3.5337-3.0513-8.9681.3445-12.364 3.5148-3.5147 9.2132-3.5147 12.728 0 3.3958 3.3959 3.5107 8.8303.3445 12.364"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(LimitIcon);
export default ForwardRef;
