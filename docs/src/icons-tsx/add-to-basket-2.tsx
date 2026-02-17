import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AddToBasket2Icon = (
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
      d="M19.8031 9h-2.3018m2.3018 0c.6239 0 1.0955.565.9839 1.1789L20.4558 12m-.6527-3h.1982m-2.5 0h-11m11 0-2-5m-9 5H4.1995m2.3018 0 2-5M4.1995 9c-.6239 0-1.0955.565-.9839 1.1789l1.3378 7.3578C4.8128 18.9631 6.0552 20 7.505 20h2.4963M4.1995 9h-.1982m13 6v3m0 0v3m0-3h-3m3 0h3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AddToBasket2Icon);
export default ForwardRef;
