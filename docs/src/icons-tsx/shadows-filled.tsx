import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ShadowsFilledIcon = (
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
      clipRule="evenodd"
      d="M12 4v1.75h4.9942C15.6255 4.6549 13.8892 4 12 4m6.779 3.75H12v1.5h7.5148a7.97 7.97 0 0 0-.7358-1.5m1.1863 3.5H12v1.5h7.9653A8 8 0 0 0 20 12a8 8 0 0 0-.0347-.75m-.4505 3.5H12v1.5h6.779a7.97 7.97 0 0 0 .7358-1.5m-2.5206 3.5H12V20c1.8892 0 3.6255-.6549 4.9942-1.75M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ShadowsFilledIcon);
export default ForwardRef;
