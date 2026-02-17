import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Podcast2Icon = (
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
      d="M18.7085 18c3.1662-3.5337 3.0513-8.9681-.3445-12.364-3.5148-3.5147-9.2132-3.5147-12.728 0C2.2402 9.032 2.1253 14.4663 5.2915 18"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <rect
      height={8}
      rx={3}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      width={6}
      x={9}
      y={8}
    />
    <path
      d="M12 16v4m0 0h-2m2 0h2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(Podcast2Icon);
export default ForwardRef;
