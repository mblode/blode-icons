import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronRightFilledIcon = (
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
      d="M8.2929 3.2929c.3905-.3905 1.0237-.3905 1.4142 0l5.8787 5.8787c1.5621 1.5621 1.5621 4.0947 0 5.6568l-5.8787 5.8787c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l5.8787-5.8787c.781-.7811.781-2.0474 0-2.8284L8.2929 4.7071c-.3905-.3905-.3905-1.0237 0-1.4142"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronRightFilledIcon);
export default ForwardRef;
