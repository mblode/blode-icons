import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CoinEuroIcon = (
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
      d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M14.5 9.2006C13.8647 8.4597 12.9793 8 12 8c-1.933 0-3.5 1.7909-3.5 4s1.567 4 3.5 4c.9793 0 1.8647-.4597 2.5-1.2006M7.5 12h3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CoinEuroIcon);
export default ForwardRef;
