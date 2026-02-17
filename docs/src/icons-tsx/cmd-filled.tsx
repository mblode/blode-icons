import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CmdFilledIcon = (
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
      d="M3 6.5C3 4.567 4.567 3 6.5 3S10 4.567 10 6.5V8h4V6.5C14 4.567 15.567 3 17.5 3S21 4.567 21 6.5 19.433 10 17.5 10H16v4h1.5c1.933 0 3.5 1.567 3.5 3.5S19.433 21 17.5 21 14 19.433 14 17.5V16h-4v1.5c0 1.933-1.567 3.5-3.5 3.5S3 19.433 3 17.5 4.567 14 6.5 14H8v-4H6.5C4.567 10 3 8.433 3 6.5M8 8V6.5C8 5.6716 7.3284 5 6.5 5S5 5.6716 5 6.5 5.6716 8 6.5 8zm2 2v4h4v-4zm-2 6H6.5c-.8284 0-1.5.6716-1.5 1.5S5.6716 19 6.5 19 8 18.3284 8 17.5zm8 0v1.5c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5zm0-8h1.5c.8284 0 1.5-.6716 1.5-1.5S18.3284 5 17.5 5 16 5.6716 16 6.5z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CmdFilledIcon);
export default ForwardRef;
