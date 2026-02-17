import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RemoveBackground2FilledIcon = (
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
      d="M12 1c.5523 0 1 .4477 1 1v1h4c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4h-4v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1H7c-2.2091 0-4-1.7909-4-4V7c0-2.2091 1.7909-4 4-4h4V2c0-.5523.4477-1 1-1M8 8H5v4h3v4H5v1c0 1.1046.8954 2 2 2h1v-3h3v-4H8zh3V5H8z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(RemoveBackground2FilledIcon);
export default ForwardRef;
