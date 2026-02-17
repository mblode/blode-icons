import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SquareBehindSquare2FilledIcon = (
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
      d="M22 5.25C22 3.455 20.5449 2 18.75 2h-7.5C9.455 2 8 3.455 8 5.25V8H5.25C3.455 8 2 9.455 2 11.25v7.5C2 20.5449 3.455 22 5.25 22h7.5c1.7949 0 3.25-1.4551 3.25-3.25V16h2.75c1.7949 0 3.25-1.4551 3.25-3.25zM16 14h2.75c.6904 0 1.25-.5596 1.25-1.25v-7.5C20 4.5596 19.4404 4 18.75 4h-7.5C10.5596 4 10 4.5596 10 5.25V8h2.75C14.5449 8 16 9.455 16 11.25z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SquareBehindSquare2FilledIcon);
export default ForwardRef;
