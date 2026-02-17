import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MathGreaterThanFilledIcon = (
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
      d="M5.077 6.6157c.2124-.5099.7978-.751 1.3076-.5385l12 5a1 1 0 0 1 0 1.8461l-12 5c-.5098.2125-1.0952-.0286-1.3077-.5384-.2124-.5098.0287-1.0953.5385-1.3077L15.4 12.0003l-9.7846-4.077c-.5098-.2124-.7509-.7979-.5385-1.3077"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MathGreaterThanFilledIcon);
export default ForwardRef;
