import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TrashCan2FilledIcon = (
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
      d="M8.126 5C8.57 3.2748 10.1362 2 12 2s3.4299 1.2748 3.874 3H20c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1v11c0 2.2091-1.7909 4-4 4H9c-2.2091 0-4-1.7909-4-4V7H4c-.5523 0-1-.4477-1-1s.4477-1 1-1zm2.1416 0c.3458-.5978.9921-1 1.7324-1s1.3866.4022 1.7324 1zM10 10c.5523 0 1 .4477 1 1v5c0 .5523-.4477 1-1 1s-1-.4477-1-1v-5c0-.5523.4477-1 1-1m4 0c.5523 0 1 .4477 1 1v5c0 .5523-.4477 1-1 1s-1-.4477-1-1v-5c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TrashCan2FilledIcon);
export default ForwardRef;
