import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const StopCircleIcon = (
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
      d="M9.5 10.5c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1v3c0 .5523-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1z"
      fill="currentColor"
    />
    <path
      clipRule="evenodd"
      d="M12 4c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8-3.5817-8-8-8M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(StopCircleIcon);
export default ForwardRef;
