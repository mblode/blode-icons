import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const OpenQuote1Icon = (
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
      d="M14.0074 14.5c0-1.933 1.5653-3.5 3.4963-3.5C19.4346 11 21 12.567 21 14.5S19.4346 18 17.5037 18s-3.4963-1.567-3.4963-3.5m0 0C13.7576 9.75 16.0053 8 19.0021 6M3.019 14.5c0-1.933 1.5653-3.5 3.4963-3.5s3.4963 1.567 3.4963 3.5S8.4462 18 6.5153 18 3.019 16.433 3.019 14.5m0 0C2.7691 9.75 5.0168 8 8.0137 6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(OpenQuote1Icon);
export default ForwardRef;
