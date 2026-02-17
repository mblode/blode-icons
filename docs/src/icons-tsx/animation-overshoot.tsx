import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AnimationOvershootIcon = (
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
      d="M4.0165 20S3.517 1.7649 8.0123 4.229 14.5057 7.186 20 7.186"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AnimationOvershootIcon);
export default ForwardRef;
