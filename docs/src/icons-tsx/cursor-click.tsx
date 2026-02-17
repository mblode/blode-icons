import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CursorClickIcon = (
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
      d="M11 3v1.5m5.6569.8433-1.0607 1.0606m-9.1924 9.1923-1.0607 1.0607M4.5 11H3m3.4038-4.5962L5.3431 5.3431m8.788 15.475-3.7434-9.457c-.2417-.6107.3627-1.2151.9734-.9734l9.457 3.7434c.3834.1518.4286.6765.0767.8915l-3.4903 2.133a.75.75 0 0 0-.2489.2489l-2.133 3.4903c-.215.3519-.7397.3067-.8915-.0767"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CursorClickIcon);
export default ForwardRef;
