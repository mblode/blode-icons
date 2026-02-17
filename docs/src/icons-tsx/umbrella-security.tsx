import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const UmbrellaSecurityIcon = (
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
      d="M12.0019 16v3.0767c0 1.0622-.8611 1.9233-1.9233 1.9233a1.923 1.923 0 0 1-1.8859-1.5461L8.0019 18.5m4-15.5v2m0 0c3.4395 0 6.4931 1.4147 8.4105 3.6016C21.7106 10.0822 20.3225 12 18.3534 12H5.6504c-1.9691 0-3.3572-1.9178-2.059-3.3984C5.509 6.4146 8.5624 5 12.002 5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(UmbrellaSecurityIcon);
export default ForwardRef;
