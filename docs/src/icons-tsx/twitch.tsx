import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TwitchIcon = (
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
      d="M4.227 3 3 6.275v13.093h4.499v2.456h2.456l2.453-2.457h3.682L21 14.46V3zm1.636 1.635h13.502v9.003L16.5 16.503H12l-2.453 2.452v-2.452H5.863zm4.502 8.186H12v-4.91h-1.635zm4.498 0h1.636v-4.91h-1.636z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(TwitchIcon);
export default ForwardRef;
