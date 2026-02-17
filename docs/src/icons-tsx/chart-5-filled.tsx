import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Chart5FilledIcon = (
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
      d="M11.6699 3c-1.1045 0-2 .8954-2 2v14.001c0 1.1045.8955 2 2 2h.67c1.1046 0 2-.8955 2-2V5c0-1.1046-.8954-2-2-2zM5 13.001c-1.1046 0-2 .8954-2 2v4c0 1.1045.8954 2 2 2h.67c1.1046 0 2-.8955 2-2v-4c0-1.1046-.8954-2-2-2zM16.3398 10c0-1.1046.8955-2 2-2h.67c1.1046 0 2 .8954 2 2v9.001c0 1.1045-.8954 2-2 2h-.67c-1.1045 0-2-.8955-2-2z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Chart5FilledIcon);
export default ForwardRef;
