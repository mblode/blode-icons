import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ListBulletsFilledIcon = (
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
      d="M21 7c0-2.2091-1.7909-4-4-4H7C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4zM9.5 8c0 .6904-.5596 1.25-1.25 1.25S7 8.6904 7 8s.5596-1.25 1.25-1.25S9.5 7.3096 9.5 8m0 4c0 .6904-.5596 1.25-1.25 1.25S7 12.6904 7 12s.5596-1.25 1.25-1.25S9.5 11.3096 9.5 12m-1.25 5.25c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25S7 15.3096 7 16s.5596 1.25 1.25 1.25"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ListBulletsFilledIcon);
export default ForwardRef;
