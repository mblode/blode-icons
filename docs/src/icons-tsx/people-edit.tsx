import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PeopleEditIcon = (
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
    <circle
      cx={12}
      cy={6.5}
      r={3.5}
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M9.9997 20H7.7949c-1.7677 0-3.199-1.5809-2.3619-3.1379C6.674 14.5539 9.0212 13 11.9997 13c.7235 0 1.4098.0917 2.0521.2636M14 21v-.7573a3 3 0 0 1 .8787-2.1213L18 15c.5523-.5523 1.4477-.5523 2 0s.5523 1.4477 0 2l-3.1213 3.1213A3 3 0 0 1 14.7574 21z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PeopleEditIcon);
export default ForwardRef;
