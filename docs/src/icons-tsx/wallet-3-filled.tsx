import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Wallet3FilledIcon = (
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
      d="M6.5 3C4.567 3 3 4.567 3 6.5V17c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4v-5c0-2.2091-1.7909-4-4-4V6c0-1.6569-1.3431-3-3-3zM15 8V6c0-.5523-.4477-1-1-1H6.5C5.6716 5 5 5.6716 5 6.5S5.6716 8 6.5 8zm.5 7.75c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25.5596 1.25 1.25 1.25"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Wallet3FilledIcon);
export default ForwardRef;
