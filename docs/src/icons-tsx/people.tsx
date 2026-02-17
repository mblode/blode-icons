import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PeopleIcon = (
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
      d="M15.4997 6.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5ZM11.9997 13c-2.9785 0-5.3257 1.5539-6.5667 3.8621C4.596 18.4191 6.0272 20 7.795 20h8.4094c1.7678 0 3.199-1.5809 2.3619-3.1379C17.3254 14.5539 14.9781 13 11.9997 13Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PeopleIcon);
export default ForwardRef;
