import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Chart4FilledIcon = (
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
      d="M16.3398 5.001c0-1.1046.8955-2 2-2h.67c1.1046 0 2 .8954 2 2v14c0 1.1045-.8954 2-2 2h-.67c-1.1045 0-2-.8955-2-2zM11.6699 8.501c-1.1045 0-2 .8954-2 2v8.5c0 1.1045.8955 2 2 2h.67c1.1046 0 2-.8955 2-2v-8.5c0-1.1046-.8954-2-2-2zM5 14.001c-1.1046 0-2 .8954-2 2v3c0 1.1045.8954 2 2 2h.67c1.1046 0 2-.8955 2-2v-3c0-1.1046-.8954-2-2-2z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Chart4FilledIcon);
export default ForwardRef;
