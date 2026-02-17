import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SwordIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m8.5 11 4.5992-5.8535A3 3 0 0 1 15.4581 4H19c.5523 0 1 .4477 1 1v3.5419a3 3 0 0 1-1.1465 2.3589L13 15.5M13.7361 16.7361l-6.4722-6.4722c-.4075-.4075-1.0788-.3703-1.4388.0797a2.901 2.901 0 0 0-.1485 3.4213l.3687.553a1 1 0 0 1-.125 1.2618L3.75 17.75c-.6904.6904-.6904 1.8096 0 2.5s1.8096.6904 2.5 0l2.1703-2.1703a1 1 0 0 1 1.2618-.125l.553.3687a2.901 2.901 0 0 0 3.4213-.1485c.45-.36.4872-1.0313.0797-1.4388Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SwordIcon);
export default ForwardRef;
