import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DeskOffice2FilledIcon = (
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
      d="M5 5c0-1.1046.8954-2 2-2h6c1.1046 0 2 .8954 2 2v3c0 1.1046-.8954 2-2 2h-2v1h6c2.2091 0 4 1.7909 4 4v4c0 1.1046-.8954 2-2 2h-5c-1.1046 0-2-.8954-2-2v-6H7c-1.1046 0-2 .8954-2 2v5c0 .5523-.4477 1-1 1s-1-.4477-1-1v-5c0-2.2091 1.7909-4 4-4h2v-1H7c-1.1046 0-2-.8954-2-2zm9 8v2h5c0-1.1046-.8954-2-2-2z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(DeskOffice2FilledIcon);
export default ForwardRef;
