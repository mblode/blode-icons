import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DoordashIcon = (
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
      d="M21.2274 8.848C20.3335 7.088 18.6062 6 16.7274 6H2.4849C2.212 6 2 6.24 2 6.528c0 .128.0455.272.1364.368l3.106 3.296c.2728.288.6516.448 1.0304.448h10.0455c.7121 0 1.303.592 1.303 1.36 0 .752-.5606 1.376-1.2879 1.376H9.4243c-.2727 0-.4849.24-.4849.528 0 .144.0455.272.1364.368l3.1061 3.296c.2727.272.6515.432 1.0303.432h3.1364c4.0758 0 7.1515-4.592 4.8788-9.152"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(DoordashIcon);
export default ForwardRef;
