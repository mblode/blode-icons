import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BaymaxIcon = (
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
      d="M22 12.5c0 4.4183-4.4772 7.5-10 7.5S2 16.9183 2 12.5 6.4772 4 12 4s10 4.0817 10 8.5Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M6 11.5c0-1.1046.8954-2 2-2 .787 0 1.4679.4546 1.7943 1.1155 1.4829-.2178 2.9285-.2178 4.4114 0C14.5321 9.9545 15.213 9.5 16 9.5c1.1046 0 2 .8954 2 2s-.8954 2-2 2c-.984 0-1.8021-.7107-1.9689-1.6467-1.3671-.2015-2.6951-.2015-4.0622 0C9.8021 12.7894 8.984 13.5 8 13.5c-1.1046 0-2-.8954-2-2"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(BaymaxIcon);
export default ForwardRef;
