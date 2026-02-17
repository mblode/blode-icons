import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ArrowUpRightFilledIcon = (
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
      d="M8 6.5C8 5.6716 8.6716 5 9.5 5h8c.8284 0 1.5.6716 1.5 1.5v8c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5v-4.3787l-8.4393 8.4394c-.5858.5857-1.5356.5857-2.1214 0s-.5857-1.5356 0-2.1214L13.8787 8H9.5C8.6716 8 8 7.3284 8 6.5"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowUpRightFilledIcon);
export default ForwardRef;
