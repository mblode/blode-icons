import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AvocadoIcon = (
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
      d="M12.75 14.25c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
    <path
      clipRule="evenodd"
      d="m5.0242 19.0076.0054.0055c2.809 2.814 7.5399 2.5574 10.266-.2564 1.8495-1.9091 3.7308-4.9171 4.8038-7.7945.5365-1.4387.8711-2.845.8984-4.0652.0274-1.2215-.2531-2.2553-.9452-2.9485-.6917-.6929-1.7229-.9739-2.9418-.9467-1.218.0272-2.6223.362-4.0595.8999C10.177 4.9774 7.171 6.865 5.2611 8.7273c-2.8493 2.7783-3.0893 7.5094-.2424 10.275z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AvocadoIcon);
export default ForwardRef;
