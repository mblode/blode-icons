import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DotGrid1x3HorizontalFilledIcon = (
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
      d="M2 12c0-1.1046.8954-2 2-2s2 .8954 2 2-.8954 2-2 2-2-.8954-2-2m8 0c0-1.1046.8954-2 2-2s2 .8954 2 2-.8954 2-2 2-2-.8954-2-2m8 0c0-1.1046.8954-2 2-2s2 .8954 2 2-.8954 2-2 2-2-.8954-2-2"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(DotGrid1x3HorizontalFilledIcon);
export default ForwardRef;
