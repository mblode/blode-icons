import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PeopleAddedIcon = (
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
      d="m14.9997 18.5 2 1.5 3-5m-5-1.412c-.8994-.3788-1.9072-.588-3-.588-2.9785 0-5.3257 1.5539-6.5667 3.8621C4.596 18.4191 6.0272 20 7.795 20h3.2047m4.5-13.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(PeopleAddedIcon);
export default ForwardRef;
