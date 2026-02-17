import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Brackets1FilledIcon = (
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
      d="M3 7c0-2.2091 1.7909-4 4-4 .5523 0 1 .4477 1 1s-.4477 1-1 1c-1.1046 0-2 .8954-2 2v10c0 1.1046.8954 2 2 2 .5523 0 1 .4477 1 1s-.4477 1-1 1c-2.2091 0-4-1.7909-4-4zm13-3c0-.5523.4477-1 1-1 2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4-.5523 0-1-.4477-1-1s.4477-1 1-1c1.1046 0 2-.8954 2-2V7c0-1.1046-.8954-2-2-2-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Brackets1FilledIcon);
export default ForwardRef;
