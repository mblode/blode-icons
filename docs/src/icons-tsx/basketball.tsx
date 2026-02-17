import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BasketballIcon = (
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
      d="M21 12h-9m9 0c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9m18 0c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9m0 0h9m0 0V3.5m0 8.5v8.5M5.7083 6C7.1334 7.5923 8 9.695 8 12s-.8666 4.4077-2.2917 6M18.2917 6C16.8666 7.5923 16 9.695 16 12s.8666 4.4077 2.2917 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(BasketballIcon);
export default ForwardRef;
