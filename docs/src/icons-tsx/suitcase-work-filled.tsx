import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SuitcaseWorkFilledIcon = (
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
      clipRule="evenodd"
      d="M11 4c-1.1046 0-2 .8954-2 2h6c0-1.1046-.8954-2-2-2zm6 2c0-2.2091-1.7909-4-4-4h-2C8.7909 2 7 3.7909 7 6H6c-2.2091 0-4 1.7909-4 4v7c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4v-7c0-2.2091-1.7909-4-4-4z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SuitcaseWorkFilledIcon);
export default ForwardRef;
