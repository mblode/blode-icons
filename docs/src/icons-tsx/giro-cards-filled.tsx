import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GiroCardsFilledIcon = (
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
      d="M2 8c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4 2.2091 0 4 1.7909 4 4v4c0 2.2091-1.7909 4-4 4h-8c-2.2091 0-4-1.7909-4-4-2.2091 0-4-1.7909-4-4zm6 8c0 1.1046.8954 2 2 2h8c1.1046 0 2-.8954 2-2v-4c0-1.1046-.8954-2-2-2v2c0 2.2091-1.7909 4-4 4zM6 9c0-.5523.4477-1 1-1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GiroCardsFilledIcon);
export default ForwardRef;
