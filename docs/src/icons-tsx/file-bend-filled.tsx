import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FileBendFilledIcon = (
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
      d="M12 2H8C5.7909 2 4 3.7909 4 6v12c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4v-8h-5c-1.6569 0-3-1.3431-3-3z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M19.4142 8 14 2.5858V7c0 .5523.4477 1 1 1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FileBendFilledIcon);
export default ForwardRef;
