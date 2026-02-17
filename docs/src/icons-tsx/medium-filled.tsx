import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MediumFilledIcon = (
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
      d="M6.7686 18.8203c3.7384 0 6.7688-3.0514 6.7688-6.8153S10.5067 5.19 6.7686 5.19 0 8.2402 0 12.005s3.0302 6.8153 6.7686 6.8153M17.5785 18.4203c1.869 0 3.3844-2.8721 3.3844-6.4153 0-3.5423-1.5154-6.4153-3.3844-6.4153-1.8691 0-3.3844 2.873-3.3844 6.4153s1.5153 6.4153 3.3844 6.4153M22.8097 17.7529c.6573 0 1.1903-2.5733 1.1903-5.7479 0-3.1743-.5325-5.7479-1.1901-5.7479s-1.1906 2.5743-1.1906 5.7479c0 3.1737.533 5.7479 1.1904 5.7479"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MediumFilledIcon);
export default ForwardRef;
