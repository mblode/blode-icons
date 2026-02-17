import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Chart7FilledIcon = (
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
      d="M5.001 2.001c0-.5523-.4477-1-1-1s-1 .4477-1 1v2.4453A2 2 0 0 0 3 4.501v1.67q0 .0274.001.0546v4.8906a2 2 0 0 0-.001.0547v1.67q0 .0274.001.0546v4.8907a2 2 0 0 0-.001.0546v1.67q0 .0274.001.0547v2.4355c0 .5523.4477 1 1 1s1-.4477 1-1v-.9902h13.664c1.2896 0 2.335-1.0454 2.335-2.335s-1.0454-2.335-2.335-2.335H5.001v-1.9999h8.164c1.2896 0 2.335-1.0454 2.335-2.335s-1.0454-2.335-2.335-2.335H5.001v-2h2.664C8.9546 7.671 10 6.6257 10 5.336c0-1.2895-1.0454-2.335-2.335-2.335H5.001z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Chart7FilledIcon);
export default ForwardRef;
