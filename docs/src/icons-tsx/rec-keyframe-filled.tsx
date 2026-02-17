import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RecKeyframeFilledIcon = (
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
      d="M9.1711 3.1642c1.5621-1.562 4.0948-1.562 5.6569 0l6.0073 6.0074c1.5621 1.5621 1.5621 4.0947 0 5.6568l-6.0073 6.0074c-1.5621 1.5621-4.0948 1.5621-5.6569 0l-6.0073-6.0074c-1.5621-1.5621-1.5621-4.0947 0-5.6568zM8.2495 12c0-2.071 1.679-3.75 3.75-3.75 2.0711 0 3.75 1.679 3.75 3.75 0 2.0711-1.6789 3.75-3.75 3.75s-3.75-1.6789-3.75-3.75"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(RecKeyframeFilledIcon);
export default ForwardRef;
