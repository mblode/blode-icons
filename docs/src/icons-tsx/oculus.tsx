import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const OculusIcon = (
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
      d="M11 9h2m8.4723 1.0277L22.5 9m-1.0277 1.0277C21.0227 7.7494 19.0129 6 16.566 6H7.434c-2.447 0-4.4567 1.7494-4.9063 4.0277m18.9446 0C22.1555 13.4899 20.4447 18 16.3993 18H7.6007c-4.0454 0-5.7562-4.5101-5.073-7.9723M1.5 9l1.0277 1.0277"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(OculusIcon);
export default ForwardRef;
