import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FingerPrint2Icon = (
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
      d="M12 11v2m-1.7631-5.5915A3.984 3.984 0 0 1 12 7c2.2091 0 4 1.7909 4 4v2q0 .0845-.0035.1681m-7.993-2.3362A4 4 0 0 0 8 11v2c0 2.2091 1.7909 4 4 4a3.98 3.98 0 0 0 1.7631-.4085m-.6456-13.5088A7.56 7.56 0 0 0 12 3c-4.1421 0-7.5 3.3579-7.5 7.5v.7916m12.2786-6.5724C18.4409 6.0949 19.5 8.1737 19.5 10.5v3c0 1.2133-.2881 2.3593-.7997 3.3734m-2.7182 2.9833C14.8281 20.5811 13.463 21 12 21c-3.5165 0-6.4677-2.4201-7.279-5.6856"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FingerPrint2Icon);
export default ForwardRef;
