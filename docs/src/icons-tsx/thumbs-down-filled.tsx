import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ThumbsDownFilledIcon = (
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
      d="M14.1967 20.8952A1.99 1.99 0 0 1 12.4147 22c-1.8406 0-3.2392-1.6467-2.9573-3.4616L9.8518 16H5.99c-2.4213 0-4.2787-2.1424-3.9529-4.54l.6795-5C2.9855 4.4805 4.6715 3 6.6694 3H20c1.1046 0 2 .8954 2 2v7c0 1.1046-.8954 2-2 2h-2.38zM18 12h2V5h-2z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ThumbsDownFilledIcon);
export default ForwardRef;
