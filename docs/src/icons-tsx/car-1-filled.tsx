import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Car1FilledIcon = (
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
      d="M8.6055 4a4 4 0 0 0-3.3281 1.7812l-.8876 1.3313a1 1 0 0 1-.2773.2773l-1.3313.8876A4 4 0 0 0 1 11.6056V15c0 1.6014 1.2547 2.9097 2.8347 2.9955C4.3955 19.1804 5.602 20 7 20c1.3962 0 2.6015-.8175 3.1632-2h3.6736c.5617 1.1825 1.767 2 3.1632 2 1.398 0 2.6045-.8196 3.1653-2.0045C21.7453 17.9097 23 16.6014 23 15v-2.5406c0-1.9067-1.3458-3.5484-3.2155-3.9223l-1.8391-.3678a1 1 0 0 1-.6039-.3806L15.7 5.6A4 4 0 0 0 12.5 4zM8.5 16.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5S6.1716 15 7 15s1.5.6716 1.5 1.5M17 18c.8284 0 1.5-.6716 1.5-1.5S17.8284 15 17 15s-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Car1FilledIcon);
export default ForwardRef;
