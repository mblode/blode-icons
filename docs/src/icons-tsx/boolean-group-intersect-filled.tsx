import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BooleanGroupIntersectFilledIcon = (
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
      d="M8 6c0-2.2091 1.7909-4 4-4h6c2.2091 0 4 1.7909 4 4v6c0 2.2091-1.7909 4-4 4h-2v2c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4v-6c0-2.2091 1.7909-4 4-4h2zm10 8h-2v-2c0-2.2091-1.7909-4-4-4h-2V6c0-1.1046.8954-2 2-2h6c1.1046 0 2 .8954 2 2v6c0 1.1046-.8954 2-2 2M8 12v-2H6c-1.1046 0-2 .8954-2 2v6c0 1.1046.8954 2 2 2h6c1.1046 0 2-.8954 2-2v-2h-2c-2.2091 0-4-1.7909-4-4"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BooleanGroupIntersectFilledIcon);
export default ForwardRef;
