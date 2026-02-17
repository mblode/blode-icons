import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FoodBellIcon = (
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
      d="M3 18h18m-11 1h4M11.9995 6c-4.633 0-8.4485 3.5009-8.9452 8.0016-.0606.549.393.9984.9452.9984h16c.5523 0 1.0059-.4494.9453-.9984C20.4481 9.5009 16.6326 6 11.9995 6M12 5v1"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(FoodBellIcon);
export default ForwardRef;
