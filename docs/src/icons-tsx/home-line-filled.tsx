import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HomeLineFilledIcon = (
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
      d="M14.5224 2.261c-1.4696-1.1941-3.5752-1.1941-5.0448 0l-5 4.0625A4 4 0 0 0 3 9.4279V17c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V9.428a4 4 0 0 0-1.4776-3.1045zM8 15c-.5523 0-1 .4477-1 1s.4477 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(HomeLineFilledIcon);
export default ForwardRef;
