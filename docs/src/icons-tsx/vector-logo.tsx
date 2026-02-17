import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VectorLogoIcon = (
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
      d="M6.5 12h11M3.75 9.875C4.6956 6.2089 8.0308 3.5 12 3.5s7.3044 2.7089 8.25 6.375m0 4.25C19.3044 17.7911 15.9692 20.5 12 20.5s-7.3044-2.7089-8.25-6.375M6 12c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2Zm16 0c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(VectorLogoIcon);
export default ForwardRef;
