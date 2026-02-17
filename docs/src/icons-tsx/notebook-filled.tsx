import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const NotebookFilledIcon = (
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
      d="M6 2.7908C4.534 3.3842 3.5 4.8213 3.5 6.5v11c0 1.6787 1.034 3.1159 2.5 3.7092z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M8 21.5h8.5c2.2091 0 4-1.7909 4-4v-11c0-2.2091-1.7909-4-4-4H8zM13 7c-.5523 0-1 .4477-1 1s.4477 1 1 1h2.5c.5523 0 1-.4477 1-1s-.4477-1-1-1zm0 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h2.5c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(NotebookFilledIcon);
export default ForwardRef;
