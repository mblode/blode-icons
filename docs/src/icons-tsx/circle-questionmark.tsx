import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CircleQuestionmarkIcon = (
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
      d="M12 16v.01M12 13c0-1.6392 2-1.0681 2-3 0-1.1046-.8954-2-2-2-.7403 0-1.3866.4022-1.7324 1M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CircleQuestionmarkIcon);
export default ForwardRef;
