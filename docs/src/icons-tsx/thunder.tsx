import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ThunderIcon = (
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
      d="M19.0037 9.9869h-6.0093L15.466 2.325c.3357-1.0409-.9798-1.7994-1.693-.9761L4.2487 12.3429c-.5636.6506-.1072 1.6702.7476 1.6702h6.0093L8.534 21.6749c-.3358 1.0409.9798 1.7994 1.693.9761l9.5243-10.9939c.5636-.6506.1072-1.6702-.7476-1.6702Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(ThunderIcon);
export default ForwardRef;
