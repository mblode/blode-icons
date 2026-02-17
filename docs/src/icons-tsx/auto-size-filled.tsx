import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AutoSizeFilledIcon = (
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
      d="M8 2C5.7909 2 4 3.7909 4 6v12c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4V6c0-2.2091-1.7909-4-4-4zM6 6c0-1.1046.8954-2 2-2h8c1.1046 0 2 .8954 2 2v12c0 1.1046-.8954 2-2 2h-3v-5c0-2.2091-1.7909-4-4-4H6z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(AutoSizeFilledIcon);
export default ForwardRef;
