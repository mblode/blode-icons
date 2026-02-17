import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LoadingCircleFilledIcon = (
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
      d="M20.5 12c0 4.6944-3.8056 8.5-8.5 8.5S3.5 16.6944 3.5 12 7.3056 3.5 12 3.5s8.5 3.8056 8.5 8.5Z"
      stroke="currentColor"
      strokeOpacity={0.3}
      strokeWidth={3}
    />
    <path
      d="M20.3681 13.5c-.6218 3.4921-3.376 6.2463-6.8681 6.8681"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={3}
    />
  </svg>
);
const ForwardRef = forwardRef(LoadingCircleFilledIcon);
export default ForwardRef;
