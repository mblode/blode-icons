import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RocketFilledIcon = (
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
      d="m15 14.9123-3 2.55v1.7713l2.029-1.2174A2 2 0 0 0 15 16.3013zm-5 2.5017-3.4142-3.4142H4.7662c-1.5546 0-2.5148-1.6959-1.715-3.029l1.2174-2.029a4 4 0 0 1 3.43-1.942h3.1161c2.5245-2.6701 5.386-4.631 9.0995-4.9534 1.1691-.1015 2.1408.8701 2.0393 2.0392-.3224 3.7135-2.2833 6.575-4.9535 9.0996v3.1161a4 4 0 0 1-1.942 3.4299l-2.029 1.2174c-1.3331.7999-3.029-.1604-3.029-1.715zm-.9124-8.4142h-1.389a2 2 0 0 0-1.715.971l-1.2174 2.029h1.7714zM2 18.9998c0-1.6568 1.3432-3 3-3s3 1.3432 3 3-1.3431 3-3 3H3c-.5523 0-1-.4477-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(RocketFilledIcon);
export default ForwardRef;
