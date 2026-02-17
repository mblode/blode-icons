import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ColumnWideHalfFilledIcon = (
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
      d="M2 8c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v3H2zM2 13v3c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4v-3z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ColumnWideHalfFilledIcon);
export default ForwardRef;
