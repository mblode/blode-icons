import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CloseQuote2Icon = (
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
      d="M7.004 5h-1c-1.657 0-3 1.3431-3 3v2.2308C3.004 11.7602 4.2436 13 5.773 13a.231.231 0 0 1 .2308.2308V19s4-1.5 4-6V7.999c0-1.6568-1.3431-2.999-3-2.999ZM18.0039 5h-1c-1.6568 0-3 1.3431-3 3v2.2308c0 1.5294 1.2398 2.7692 2.7692 2.7692a.231.231 0 0 1 .2308.2308V19s4-1.5 4-6V7.999c0-1.6568-1.3431-2.999-3-2.999Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CloseQuote2Icon);
export default ForwardRef;
