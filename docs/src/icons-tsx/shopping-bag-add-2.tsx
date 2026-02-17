import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShoppingBagAdd2Icon = (
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
      d="M14.9999 8V6c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v2m2 13H7.9967c-1.8386 0-3.2447-1.6389-2.965-3.4562l1.0769-7C6.3337 9.0803 7.593 8 9.0736 8h5.8525c1.4808 0 2.74 1.0803 2.9652 2.5438l.2059 1.3386M17.9999 16v3m0 0v3m0-3h-3m3 0h3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBagAdd2Icon);
export default ForwardRef;
