import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Brackets2FilledIcon = (
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
      d="M4 7c0-2.2091 1.7909-4 4-4 .5523 0 1 .4477 1 1s-.4477 1-1 1c-1.1046 0-2 .8954-2 2v3a2.99 2.99 0 0 1-.7639 2A2.99 2.99 0 0 1 6 14v3c0 1.1046.8954 2 2 2 .5523 0 1 .4477 1 1s-.4477 1-1 1c-2.2091 0-4-1.7909-4-4v-3c0-.5523-.4477-1-1-1s-1-.4477-1-1 .4477-1 1-1 1-.4477 1-1zm11-3c0-.5523.4477-1 1-1 2.2091 0 4 1.7909 4 4v3c0 .5523.4477 1 1 1s1 .4477 1 1-.4477 1-1 1-1 .4477-1 1v3c0 2.2091-1.7909 4-4 4-.5523 0-1-.4477-1-1s.4477-1 1-1c1.1046 0 2-.8954 2-2v-3a2.99 2.99 0 0 1 .7639-2A2.99 2.99 0 0 1 18 10V7c0-1.1046-.8954-2-2-2-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Brackets2FilledIcon);
export default ForwardRef;
