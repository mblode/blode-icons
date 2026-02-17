import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MathLessThanCircleFilledIcon = (
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
      d="M22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10m-7.9472-3.8944c.494-.247 1.0946-.0468 1.3416.4472s.0468 1.0946-.4472 1.3416L10.7361 12l4.2111 2.1056c.494.247.6942.8476.4472 1.3416s-.8476.6942-1.3416.4472l-6-3a1 1 0 0 1 0-1.7888z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MathLessThanCircleFilledIcon);
export default ForwardRef;
