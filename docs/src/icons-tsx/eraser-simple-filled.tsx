import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const EraserSimpleFilledIcon = (
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
      d="M11.1711 4.4143c1.5621-1.5621 4.0948-1.5621 5.6569 0l2.7573 2.7573c1.5621 1.5621 1.5621 4.0948 0 5.6569L14.9138 17.5 6.4996 9.0858zM5.0853 10.5l-.6715.6716c-1.5621 1.5621-1.5621 4.0948 0 5.6569l2.7573 2.7573c1.5621 1.5621 4.0948 1.5621 5.6569 0l.6715-.6716z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(EraserSimpleFilledIcon);
export default ForwardRef;
