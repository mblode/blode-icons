import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Car10FilledIcon = (
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
      d="M12 5c0-.5522-.4476-.9999-.9999-1H5C2.7909 4 1 5.791 1 8v7.0001c0 1.6014 1.2547 2.9097 2.8347 2.9955C4.3955 19.1805 5.602 20.0001 7 20.0001c1.3962 0 2.6015-.8175 3.1632-2h3.6736c.5617 1.1825 1.767 2 3.1632 2 1.398 0 2.6045-.8196 3.1653-2.0045C21.7453 17.9098 23 16.6015 23 15.0001v-1.7393a5 5 0 0 0-.9043-2.8672l-1.582-2.2607A5.001 5.001 0 0 0 16.417 6H15c-.5523 0-1 .4477-1 1v9h-2zM7 15.0001c.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5m10 0c.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(Car10FilledIcon);
export default ForwardRef;
