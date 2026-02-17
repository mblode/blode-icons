import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MapPinIcon = (
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
      d="M14.4978 10c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M19 10c0 3.9981-3.2518 7.6561-5.3227 9.5804-.9594.8914-2.3952.8914-3.3546 0C8.2517 17.6561 5 13.9981 5 10c0-3.866 3.134-7 7-7s7 3.134 7 7Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(MapPinIcon);
export default ForwardRef;
