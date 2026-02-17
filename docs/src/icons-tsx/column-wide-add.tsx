import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ColumnWideAddIcon = (
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
      d="M12 19v1c.5523 0 1-.4477 1-1zm8-9c0 .5523.4477 1 1 1s1-.4477 1-1zm0 4c0-.5523-.4477-1-1-1s-1 .4477-1 1zm-2 6c0 .5523.4477 1 1 1s1-.4477 1-1zm-2-4c-.5523 0-1 .4477-1 1s.4477 1 1 1zm6 2c.5523 0 1-.4477 1-1s-.4477-1-1-1zM4 16V8H2v8zm8 2H6v2h6zm8-10v2h2V8zM6 6h6V4H6zm6 0h6V4h-6zm1 13V5h-2v14zm5-5v3h2v-3zm0 3v3h2v-3zm-2 1h3v-2h-3zm3 0h3v-2h-3zm3-10c0-2.2091-1.7909-4-4-4v2c1.1046 0 2 .8954 2 2zM4 8c0-1.1046.8954-2 2-2V4C3.7909 4 2 5.7909 2 8zm-2 8c0 2.2091 1.7909 4 4 4v-2c-1.1046 0-2-.8954-2-2z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(ColumnWideAddIcon);
export default ForwardRef;
