import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HeadphonesFilledIcon = (
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
      d="M5 12c0-3.866 3.134-7 7-7s7 3.134 7 7v1c-2.2091 0-4 1.7909-4 4v1c0 1.6569 1.3431 3 3 3s3-1.3431 3-3v-6c0-4.6325-3.5-8.4476-8-8.945V3h-1c-4.9706 0-9 4.0294-9 9v6c0 1.6569 1.3431 3 3 3s3-1.3431 3-3v-1c0-2.2091-1.7909-4-4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(HeadphonesFilledIcon);
export default ForwardRef;
