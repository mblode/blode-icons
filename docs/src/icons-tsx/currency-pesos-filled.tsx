import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CurrencyPesosFilledIcon = (
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
      d="M19.75 11H4.25M19.75 7H4.25M7.25 20.75V3.25h4.6667c3.2216 0 5.8333 2.6117 5.8333 5.8333s-2.6117 5.8334-5.8333 5.8334H7.7273"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyPesosFilledIcon);
export default ForwardRef;
