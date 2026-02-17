import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Bag2FilledIcon = (
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
      d="M9.002 6c0-.5523.4477-1 1-1h4c.5522 0 1 .4477 1 1v1H17v14h1.0022c2.2091 0 4-1.7909 4-4v-5A1 1 0 0 0 22 11.9332V11c0-2.2091-1.7909-4-4-4h-.998V6c0-1.6569-1.3432-3-3-3h-4c-1.6569 0-3 1.3431-3 3v1H9v14h6V7H9.002zM6 7h1v14h-.9978c-2.2091 0-4-1.7909-4-4L2 11c0-2.2091 1.7909-4 4-4"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Bag2FilledIcon);
export default ForwardRef;
