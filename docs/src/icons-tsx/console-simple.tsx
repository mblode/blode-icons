import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ConsoleSimpleIcon = (
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
      d="m5 7 4.2929 4.2929c.3905.3905.3905 1.0237 0 1.4142L5 17m8 0h6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ConsoleSimpleIcon);
export default ForwardRef;
