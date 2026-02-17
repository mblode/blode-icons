import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ThumbsUpFilledIcon = (
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
      d="M11 2a1 1 0 0 0-.8944.5528L6.382 10H4c-1.1046 0-2 .8954-2 2v7c0 1.1046.8954 2 2 2h13.3813c2.0003 0 3.6931-1.4776 3.9633-3.4595l.6819-5C22.354 10.1387 20.4871 8 18.0631 8h-3.879l.3957-2.5378C14.8634 3.643 13.4567 2 11.6156 2zM6 19v-7H4v7z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ThumbsUpFilledIcon);
export default ForwardRef;
