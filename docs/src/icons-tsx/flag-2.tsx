import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Flag2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 15V4.6192c0-.3794.2142-.7256.5663-.8671C6.303 3.4559 7.6555 3 9 3c1.9913 0 4.0087 2 6 2 .8882 0 1.7798-.199 2.4951-.4193C18.2048 4.362 19 4.8723 19 5.6149v8.7659c0 .3794-.2142.7256-.5663.8671C17.697 15.5441 16.3446 16 15 16c-1.9913 0-4.0087-2-6-2s-4 1-4 1m0 0v6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Flag2Icon);
export default ForwardRef;
