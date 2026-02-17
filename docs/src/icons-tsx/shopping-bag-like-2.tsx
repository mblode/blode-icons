import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShoppingBagLike2Icon = (
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
      d="M14.9999 8V6c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v2m2.5 13H7.9967c-1.8386 0-3.2447-1.6389-2.965-3.4562l1.0769-7C6.3337 9.0803 7.593 8 9.0736 8h5.8525c1.4808 0 2.74 1.0803 2.9652 2.5438l.1471.9562m-.2882 9.5301c.271 0 3.2514-1.5353 3.2514-3.6126 0-1.445-.9032-2.1675-1.8063-2.1675s-1.4451.5419-1.4451.5419-.5418-.5419-1.445-.5419c-.9031 0-1.8063.7225-1.8063 2.1675 0 2.0773 2.9804 3.6126 3.2513 3.6126"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBagLike2Icon);
export default ForwardRef;
