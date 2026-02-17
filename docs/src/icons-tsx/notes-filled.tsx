import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const NotesFilledIcon = (
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
      d="M3.5 6.5c0-2.2091 1.7909-4 4-4h9c2.2091 0 4 1.7909 4 4v11c0 2.2091-1.7909 4-4 4h-9c-2.2091 0-4-1.7909-4-4V17c-.5523 0-1-.4477-1-1s.4477-1 1-1v-2c-.5523 0-1-.4477-1-1s.4477-1 1-1V9c-.5523 0-1-.4477-1-1s.4477-1 1-1zM9 8c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(NotesFilledIcon);
export default ForwardRef;
