import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CentralIconSystemIcon = (
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
      d="M12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10c5.0751 0 9.2672-3.7807 9.9136-8.6792h-6.3287L12 16.9057 7.0943 12 12 7.0943l3.5849 3.5849h6.3287C21.2672 5.7807 17.0751 2 12 2"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(CentralIconSystemIcon);
export default ForwardRef;
