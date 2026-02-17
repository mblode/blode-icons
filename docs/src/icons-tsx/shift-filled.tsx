import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShiftFilledIcon = (
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
      d="M13.3485 2.3772c-.7638-.6974-1.9333-.6974-2.6971 0L1.7297 10.523C.3813 11.7542 1.2523 14 3.0782 14H6v3c0 2.2091 1.7909 4 4 4h4c2.2092 0 4-1.7909 4-4v-3h2.9217c1.8259 0 2.697-2.2458 1.3485-3.477z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ShiftFilledIcon);
export default ForwardRef;
