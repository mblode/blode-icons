import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CloudSimpleDisconnectedIcon = (
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
      d="M19 18.584c1.7659-.7716 3-2.5337 3-4.584 0-2.7614-2.2386-5-5-5a5.05 5.05 0 0 0-.6692.0444c-.5141.0688-1.0424-.1665-1.3072-.6124C13.8039 6.3772 11.5628 5 9 5c-3.866 0-7 3.134-7 7 0 2.3787 1.1865 4.4804 3 5.7453M14 16l-2 2m0 0-2 2m2-2-2-2m2 2 2 2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CloudSimpleDisconnectedIcon);
export default ForwardRef;
