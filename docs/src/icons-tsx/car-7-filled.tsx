import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Car7FilledIcon = (
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
      clipRule="evenodd"
      d="M8 6c0-1.1046.8954-2 2-2h3.5a4 4 0 0 1 3.2 1.6l1.674 2.232a1 1 0 0 0 .5574.37l1.0387.2598C21.7508 8.9069 23 10.5069 23 12.3423V15c0 1.6014-1.2547 2.9097-2.8347 2.9955C19.6045 19.1804 18.398 20 17 20c-1.3962 0-2.6015-.8175-3.1632-2h-3.6736C9.6015 19.1825 8.3962 20 7 20c-1.398 0-2.6045-.8196-3.1653-2.0045C2.2547 17.9097 1 16.6014 1 15v-3c0-1.6569 1.3432-3 3-3h4zm-1 9c-.8284 0-1.5.6716-1.5 1.5S6.1716 18 7 18s1.5-.6716 1.5-1.5S7.8284 15 7 15m10 0c-.8284 0-1.5.6716-1.5 1.5S16.1716 18 17 18s1.5-.6716 1.5-1.5S17.8284 15 17 15"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Car7FilledIcon);
export default ForwardRef;
