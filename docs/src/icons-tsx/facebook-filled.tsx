import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FacebookFilledIcon = (
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
      d="M9.584 21.706v-6.6499H7.5202V12H9.584v-1.3167c0-3.4039 1.54-4.98 4.88-4.98.6323 0 1.7239.124 2.1723.2478v2.7683c-.2362-.0238-.6484-.036-1.1562-.036-1.64 0-2.2722.62-2.2722 2.236V12h3.2684l-.56 3.0556h-2.7039v6.8721C18.1637 21.3279 22 17.112 22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12c0 4.6899 3.2281 8.6253 7.584 9.706"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FacebookFilledIcon);
export default ForwardRef;
