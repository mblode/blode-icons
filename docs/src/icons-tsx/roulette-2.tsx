import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Roulette2Icon = (
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
      d="M9.0345 3.5C5.521 4.7257 3 8.0685 3 12c0 4.9706 4.0294 9 9 9s9-4.0294 9-9c0-3.9315-2.5209-7.2743-6.0345-8.5M3.5 12H6m14.5 0H18M6 18l1.7574-1.7574M18 6l-1.7574 1.7573M6 6l1.7574 1.7573M18 18l-1.7574-1.7574M12 20.5V18m0-12L9 3c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1zm2 6c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Roulette2Icon);
export default ForwardRef;
