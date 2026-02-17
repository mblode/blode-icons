import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArCube1Icon = (
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
      d="M12.0002 12 4.5 7.7812M12.0002 12 12 20.5m.0002-8.5L19.5 7.7812m.5.8885v6.6606a2 2 0 0 1-1.0195 1.7431l-6 3.375a2 2 0 0 1-1.961 0l-6-3.375A2 2 0 0 1 4 15.3303V8.6697a2 2 0 0 1 1.0195-1.7432l6-3.375a2 2 0 0 1 1.961 0l6 3.375A2 2 0 0 1 20 8.6697"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ArCube1Icon);
export default ForwardRef;
