import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SquareBehindSquare1FilledIcon = (
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
      d="M2 5.25C2 3.455 3.455 2 5.25 2h7.5C14.5449 2 16 3.455 16 5.25V8h2.75C20.5449 8 22 9.455 22 11.25v7.5c0 1.7949-1.4551 3.25-3.25 3.25h-7.5C9.455 22 8 20.5449 8 18.75V16H5.25C3.455 16 2 14.5449 2 12.75zM14 8h-2.75C9.455 8 8 9.455 8 11.25V14H5.25C4.5596 14 4 13.4404 4 12.75v-7.5C4 4.5596 4.5596 4 5.25 4h7.5c.6904 0 1.25.5596 1.25 1.25z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SquareBehindSquare1FilledIcon);
export default ForwardRef;
