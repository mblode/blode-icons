import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RearIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.0118 4v4h-4M5 20v-4h4m-5-4c0-4.4183 3.5817-8 8-8 2.6362 0 5.0303 1.2751 6.5 3.2422M20 12c0 4.4183-3.5817 8-8 8-2.6362 0-5.0303-1.2751-6.5-3.2422M12 12h.01"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(RearIcon);
export default ForwardRef;
