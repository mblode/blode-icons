import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PeopleCircleIcon = (
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
      d="M6.116 18.8103C7.4455 17.0943 9.5004 16 12 16s4.5544 1.0943 5.8841 2.8103m-11.7682 0C7.6937 20.1747 9.7505 21 12 21s4.3063-.8253 5.8841-2.1897m-11.7682 0C4.2075 17.16 3 14.721 3 12c0-4.9706 4.0294-9 9-9s9 4.0294 9 9c0 2.721-1.2075 5.16-3.1159 6.8103M15 10c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PeopleCircleIcon);
export default ForwardRef;
