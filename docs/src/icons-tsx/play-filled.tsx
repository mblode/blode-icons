import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PlayFilledIcon = (
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
      d="M11.1967 2.7184C8.5368.9704 5 2.8784 5 6.0612v11.8776c0 3.1828 3.5368 5.0907 6.1967 3.3428l9.0373-5.9388c2.4044-1.58 2.4044-5.1056 0-6.6856z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PlayFilledIcon);
export default ForwardRef;
