import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChainLink3Icon = (
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
      d="m10 5.5.7514-.7416c2.3445-2.3445 6.1457-2.3445 8.4902 0s2.3445 6.1457 0 8.4902L18.5 14m-13-4-.7416.7514c-2.3445 2.3445-2.3445 6.1457 0 8.4902s6.1457 2.3445 8.4902 0L14 18.5M10 14l4-4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ChainLink3Icon);
export default ForwardRef;
