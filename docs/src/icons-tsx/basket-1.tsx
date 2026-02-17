import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Basket1Icon = (
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
      d="M2 3h.7293A1.5 1.5 0 0 1 4.209 4.2534L4.5 6m0 0 1.0822 6.4932C5.8232 13.9398 7.0749 15 8.5414 15h8.4857c1.4361 0 2.6708-1.0177 2.9449-2.4274l.9307-4.7863C21.0827 6.8603 20.3735 6 19.4302 6zM9 19c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1m9 0c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Basket1Icon);
export default ForwardRef;
