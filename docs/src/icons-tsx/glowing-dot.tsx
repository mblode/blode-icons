import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GlowingDotIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    ref={ref}
    viewBox="0 0 12 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={6} cy={6} fill="currentColor" fillOpacity={0.15} r={6} />
    <circle cx={6} cy={6} fill="currentColor" r={4} />
  </svg>
);
const ForwardRef = forwardRef(GlowingDotIcon);
export default ForwardRef;
