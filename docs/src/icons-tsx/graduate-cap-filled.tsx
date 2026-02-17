import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GraduateCapFilledIcon = (
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
      d="M12.4138 3.0896a1 1 0 0 0-.8276 0l-11 5a1 1 0 0 0 0 1.8208l11 5a1 1 0 0 0 .8276 0L22 10.553V16c0 .5523.4477 1 1 1s1-.4477 1-1V9a1 1 0 0 0-.5862-.9104z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M4.5 12.801v2.1682a4 4 0 0 0 2.028 3.4801l3.4999 1.9833a4 4 0 0 0 3.9441 0l3.5-1.9833a4 4 0 0 0 2.028-3.4801V12.801l-6.5925 3.357a2 2 0 0 1-1.815 0z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GraduateCapFilledIcon);
export default ForwardRef;
