import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Images4FilledIcon = (
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
      d="M9 3C7.067 3 5.5 4.567 5.5 6.5S7.067 10 9 10s3.5-1.567 3.5-3.5S10.933 3 9 3M7.5 6.5C7.5 5.6716 8.1716 5 9 5s1.5.6716 1.5 1.5S9.8284 8 9 8s-1.5-.6716-1.5-1.5"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M12.8682 10.0002c1.0451-1.4516 3.2321-1.368 4.1633.1592l3.6822 6.0389c1.0158 1.6659-.1833 3.8015-2.1345 3.8015H5.5237c-1.9867 0-3.1796-2.2054-2.0924-3.8681l1.877-2.8709c.7778-1.1894 2.3892-1.4922 3.5456-.6662l1.012.7229a.5.5 0 0 0 .6964-.1147z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Images4FilledIcon);
export default ForwardRef;
