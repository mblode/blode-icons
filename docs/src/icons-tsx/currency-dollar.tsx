import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CurrencyDollarIcon = (
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
      d="M6 17.3153c2.2857 4.2394 12 3.8438 12-.9148 0-5.543-11.5-2.6894-11.5-8.829 0-4.3172 7.7288-5.0422 10.78-1.8396M12 22.5v-21"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyDollarIcon);
export default ForwardRef;
