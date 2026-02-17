import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RainyLightIcon = (
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
      d="m10.5 15.5-1 2m4 1-1 2m-3-5.5H16c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4q-.2751.0002-.5405.0362c-.5317.0718-1.091-.1529-1.3901-.5983C13.0822 4.9676 11.4041 4 9.5 4 6.4624 4 4 6.4624 4 9.5S6.4624 15 9.5 15"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(RainyLightIcon);
export default ForwardRef;
