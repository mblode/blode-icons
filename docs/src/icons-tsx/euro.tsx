import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const EuroIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15 9.2006C14.3647 8.4597 13.4793 8 12.5 8 10.567 8 9 9.7909 9 12s1.567 4 3.5 4c.9793 0 1.8647-.4597 2.5-1.2006M8 12h3m10 0c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(EuroIcon);
export default ForwardRef;
