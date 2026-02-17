import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BowlingIcon = (
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
      d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <circle cx={13.3984} cy={8.25} fill="currentColor" r={1.5} />
    <circle cx={16.5} cy={11.5} fill="currentColor" r={1.5} />
    <circle cx={12.25} cy={12.5} fill="currentColor" r={1.5} />
  </svg>
);
const ForwardRef = forwardRef(BowlingIcon);
export default ForwardRef;
