import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowRightLeftIcon = (
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
      d="m7.5 21-2.9393-2.9393c-.5858-.5858-.5858-1.5356 0-2.1214L7.5 13m9-2 2.9393-2.9393c.5858-.5858.5858-1.5356 0-2.1214L16.5 3M5 17h15M4 7h15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRightLeftIcon);
export default ForwardRef;
