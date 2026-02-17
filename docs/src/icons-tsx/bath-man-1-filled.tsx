import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BathMan1FilledIcon = (
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
      d="M12 1c-1.6569 0-3 1.3432-3 3s1.3431 3 3 3 3-1.3431 3-3-1.3431-3-3-3M10 8c-2.2091 0-4 1.7909-4 4v3c0 1.1046.8954 2 2 2v4c0 1.1046.8954 2 2 2h4c1.1046 0 2-.8954 2-2v-4c1.1046 0 2-.8954 2-2v-3c0-2.2091-1.7909-4-4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BathMan1FilledIcon);
export default ForwardRef;
