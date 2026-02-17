import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AvocadoFilledIcon = (
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
      d="M17.0888 2.002c1.3615-.0303 2.711.2775 3.6719 1.24s1.2678 2.3142 1.2372 3.6774c-.0307 1.371-.4022 2.8931-.9612 4.3922-1.1168 2.9948-3.0685 6.124-5.0225 8.1409-3.0791 3.1782-8.4528 3.512-11.692.267-3.2952-3.2011-2.9652-8.5818.2411-11.7082 2.018-1.9676 5.1455-3.9264 8.1379-5.0462 1.4978-.5606 3.0183-.9325 4.3876-.963M9.7504 17.75c1.9329 0 3.5-1.567 3.5-3.5s-1.5671-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.5 3.5 3.5"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(AvocadoFilledIcon);
export default ForwardRef;
