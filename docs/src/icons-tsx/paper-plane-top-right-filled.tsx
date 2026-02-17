import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PaperPlaneTopRightFilledIcon = (
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
      d="M1.7098 6.5644C.2308 5.3846 1.0652 3.001 2.9571 3.001h18.0694c1.5358 0 2.4986 1.6592 1.7364 2.9926l-8.8433 15.4693c-.9243 1.6168-3.3626 1.2037-3.7027-.6274l-1.4435-7.772 5.721-3.2525c.4801-.273.648-.8834.3751-1.3635-.273-.4802-.8835-.6481-1.3636-.3751l-5.784 3.2883z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PaperPlaneTopRightFilledIcon);
export default ForwardRef;
