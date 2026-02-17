import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const KickIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 4h5.25v3.5556H12V5.7778h1.75V4H19v5.3333h-1.75v1.7778H15.5v1.7778h1.75v1.7778H19V20h-5.25v-1.7778H12v-1.7778h-1.75V20H5z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(KickIcon);
export default ForwardRef;
