import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CrownFilledIcon = (
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
      d="M13.9095 4.9088c0 .744-.426 1.3882-1.0463 1.704.978 2.6197 2.0025 3.9075 2.9033 4.008 1.0125.114 1.9395-.3525 2.847-1.503a.92.92 0 0 1 .384-.2925 1.9086 1.9086 0 0 1 1.4002-2.9507 1.9088 1.9088 0 1 1-.1477 3.7772 1.04 1.04 0 0 1-.03.2647l-1.4858 5.9858A2.752 2.752 0 0 1 16.0672 18H7.9328a2.752 2.752 0 0 1-2.667-2.0977l-1.485-5.9858a1 1 0 0 1-.03-.2647 1.9088 1.9088 0 1 1 1.2525-.8265c.1447.057.282.1575.3952.3075.864 1.1437 1.7813 1.6065 2.835 1.488.9443-.105 1.9635-1.389 2.904-4.008a1.9089 1.9089 0 0 1 .8234-3.6108 1.9085 1.9085 0 0 1 1.9486 1.9068M5.25 20.4375c0-.5175.42-.9375.9375-.9375h11.625a.9376.9376 0 0 1 0 1.875H6.1875c-.5175 0-.9375-.42-.9375-.9375"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(CrownFilledIcon);
export default ForwardRef;
