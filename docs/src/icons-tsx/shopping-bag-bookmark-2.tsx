import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShoppingBagBookmark2Icon = (
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
      d="M14.9999 8V6c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v2m2 13H7.9967c-1.8386 0-3.2447-1.6389-2.965-3.4562l1.0769-7C6.3337 9.0803 7.593 8 9.0736 8h5.8525c1.4808 0 2.74 1.0803 2.9652 2.5438l.0701.4562m1.0385 4h-3c-.5523 0-1 .4477-1 1v5l2.5-1.5 2.5 1.5v-5c0-.5523-.4477-1-1-1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBagBookmark2Icon);
export default ForwardRef;
