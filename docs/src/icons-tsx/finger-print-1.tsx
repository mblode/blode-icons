import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FingerPrint1Icon = (
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
      d="M6.4052 19.0481q.276-.6646.507-1.3512m7.4311 2.9957a28.7783 28.7783 0 0 0 1.185-4.441m3.9194.8067A33.2 33.2 0 0 0 20.0026 11c0-4.4183-3.5817-8-8-8-1.2554 0-2.4433.2892-3.5006.8046M3.5234 15.0245A17.04 17.04 0 0 0 4.0026 11c0-1.7403.5557-3.3508 1.4993-4.6638M12.003 11c0 2.7604-.4473 5.4163-1.2735 7.8992a24.8 24.8 0 0 1-.7119 1.8811M7.7123 14.5a21.14 21.14 0 0 0 .2903-3.5c0-2.2091 1.7909-4 4-4s4 1.7909 4 4q-.0001.925-.0571 1.8357"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FingerPrint1Icon);
export default ForwardRef;
