import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Car3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M18.5 17h1.303C21.0164 17 22 16.0164 22 14.803v-.2361c0-2.6554-1.8743-4.9418-4.4782-5.4625a1.393 1.393 0 0 1-.8411-.53L15.2 6.6A4 4 0 0 0 12 5H7.712C4.4644 5 2 7.5 2 11.5819V14.5C2 15.8807 3.1193 17 4.5 17"
      stroke="currentColor"
      strokeWidth={2}
    />
    <circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} />
    <circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} />
    <path d="M14.5 17h-5" stroke="currentColor" strokeWidth={2} />
  </svg>
);
const ForwardRef = forwardRef(Car3Icon);
export default ForwardRef;
