import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BankIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19 9v8m-4 0V9M5 9v8m4 0V9M3.6833 6.6584l6.9751-3.4876a3 3 0 0 1 2.6832 0l6.9751 3.4876A1.236 1.236 0 0 1 21 7.764C21 8.4466 20.4466 9 19.7639 9H4.2361C3.5534 9 3 8.4466 3 7.764c0-.4682.2645-.8962.6833-1.1056ZM4.236 20h15.528c.6081 0 1.0374-.5957.8451-1.1725A2.672 2.672 0 0 0 18.0737 17H5.9263a2.6725 2.6725 0 0 0-2.5354 1.8275C3.1986 19.4043 3.6279 20 4.236 20Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BankIcon);
export default ForwardRef;
