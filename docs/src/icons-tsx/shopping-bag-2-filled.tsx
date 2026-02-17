import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShoppingBag2FilledIcon = (
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
      d="M8.0001 6c0-2.2091 1.7909-4 4-4s4 1.7909 4 4v1.1462c1.4825.4128 2.6359 1.6607 2.8797 3.2456l1.077 7C20.3295 19.8148 18.4548 22 16.0033 22H7.997c-2.4516 0-4.3263-2.1852-3.9535-4.6082l1.0769-7C5.3642 8.8068 6.5177 7.559 8 7.1462zm2 1h4V6c0-1.1046-.8954-2-2-2s-2 .8954-2 2z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBag2FilledIcon);
export default ForwardRef;
