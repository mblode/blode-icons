import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RecKeyframe2FilledIcon = (
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
      d="M9.9995 12c0-1.1046.8954-2 2-2s2 .8954 2 2-.8954 2-2 2-2-.8954-2-2"
      fill="currentColor"
    />
    <path
      clipRule="evenodd"
      d="M9.1711 3.1642c1.5621-1.562 4.0948-1.562 5.6569 0l6.0073 6.0074c1.5621 1.5621 1.5621 4.0947 0 5.6568l-6.0073 6.0074c-1.5621 1.5621-4.0948 1.5621-5.6569 0l-6.0073-6.0074c-1.5621-1.5621-1.5621-4.0947 0-5.6568zM11.9995 8c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4 4-1.7909 4-4-1.7908-4-4-4"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(RecKeyframe2FilledIcon);
export default ForwardRef;
