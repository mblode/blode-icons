import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";

import { createLucideIcon } from "./create-lucide-icon";
const CrownFilledIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.9095 4.9088c0 .744-.426 1.3882-1.0463 1.704.978 2.6197 2.0025 3.9075 2.9033 4.008 1.0125.114 1.9395-.3525 2.847-1.503a.92.92 0 0 1 .384-.2925 1.9088 1.9088 0 1 1 1.2525.8265 1.03 1.03 0 0 1-.03.2647l-1.4858 5.9858A2.752 2.752 0 0 1 16.0672 18H7.9328a2.752 2.752 0 0 1-2.667-2.0977l-1.485-5.9858a.99.99 0 0 1-.03-.2647 1.909 1.909 0 0 1-2.1622-2.4479A1.909 1.909 0 0 1 3.603 5.8746a1.9088 1.9088 0 0 1 1.4003 2.9507c.1447.057.282.1575.3952.3075.864 1.1437 1.7813 1.6065 2.835 1.488.9443-.105 1.9635-1.389 2.904-4.008a1.9092 1.9092 0 0 1-.1363-3.3286 1.91 1.91 0 0 1 .9597-.2822 1.91 1.91 0 0 1 1.6856.9416c.1719.2926.2627.6258.263.9652M5.25 20.4375c0-.5175.42-.9375.9375-.9375h11.625a.9376.9376 0 0 1 0 1.875H6.1875c-.5175 0-.9375-.42-.9375-.9375"
      clipRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(CrownFilledIcon);
export default createLucideIcon("CrownFilledIcon", ForwardRef);
