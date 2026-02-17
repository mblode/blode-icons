import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SunriseIcon = (
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
      d="M12 3v1m-8 8H3m17 0h1m-3.3438-5.6569.7072-.707M3 16h18M7 20h10M6.3438 6.3432l-.707-.7072M8 12c0-2.2091 1.7909-4 4-4s4 1.7909 4 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(SunriseIcon);
export default ForwardRef;
