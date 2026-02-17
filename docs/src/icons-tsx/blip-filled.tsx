import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BlipFilledIcon = (
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
      d="M14.5771 2.8132 7.7043 8.5955c-3.2027 2.6945-3.6204 7.4819-.933 10.6931 2.6873 3.2111 7.4621 3.63 10.6648.9355l1.7182-1.4456c1.0676-.8981 1.0704-2.6569.311-3.5643-.5977-.7142-2.2388-1.4191-3.3402-.4926l1.5035-1.2648c1.0675-.8982 1.2068-2.494.311-3.5644s-2.4874-1.21-3.555-.3118l3.4365-2.8912c1.0675-.8981 1.2068-2.494.311-3.5643-.8958-1.0704-2.4874-1.21-3.555-.3119M7.1436 3.6867a.749.749 0 0 1 .2553-.7057l.3789-.3188c1.3293-1.1184 3.2657-.7544 4.1573.5982L7.6914 6.7222z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BlipFilledIcon);
export default ForwardRef;
