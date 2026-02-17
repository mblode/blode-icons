import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CryptoCoinIcon = (
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
      d="M12 7v1m0 8v1m2.5-7.4495C13.8647 8.9022 12.9793 8.5 12 8.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5c.9793 0 1.8647-.4022 2.5-1.0505M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CryptoCoinIcon);
export default ForwardRef;
