import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BooleanGroupUnionFilledIcon = (
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
      d="M12 2C9.7909 2 8 3.7909 8 6v2H6c-2.2091 0-4 1.7909-4 4v6c0 2.2091 1.7909 4 4 4h6c2.2091 0 4-1.7909 4-4v-2h2c2.2091 0 4-1.7909 4-4V6c0-2.2091-1.7909-4-4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BooleanGroupUnionFilledIcon);
export default ForwardRef;
