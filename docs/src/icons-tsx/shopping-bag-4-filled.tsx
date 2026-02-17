import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShoppingBag4FilledIcon = (
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
      d="M12 2c2.7614 0 5 2.2386 5 5 2.2091 0 4 1.7909 4 4v6c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4v-6c0-2.2091 1.7909-4 4-4 0-2.7614 2.2386-5 5-5M9 7c0-1.6569 1.3431-3 3-3s3 1.3431 3 3z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBag4FilledIcon);
export default ForwardRef;
