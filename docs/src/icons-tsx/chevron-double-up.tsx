import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronDoubleUpIcon = (
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
      d="m8 10.5 2.9393-2.9393c.5858-.5858 1.5356-.5858 2.1214 0L16 10.5m-8 7 2.9393-2.9393c.5858-.5858 1.5356-.5858 2.1214 0L16 17.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronDoubleUpIcon);
export default ForwardRef;
