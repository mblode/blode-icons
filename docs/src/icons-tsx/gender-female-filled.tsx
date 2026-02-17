import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GenderFemaleFilledIcon = (
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
      d="M12 4C9.5147 4 7.5 6.0147 7.5 8.5S9.5147 13 12 13s4.5-2.0147 4.5-4.5S14.4853 4 12 4M5.5 8.5C5.5 4.9102 8.4101 2 12 2s6.5 2.9101 6.5 6.5c0 3.2508-2.3864 5.9442-5.5028 6.424Q13 14.9616 13 15v2h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2H9c-.5523 0-1-.4477-1-1s.4477-1 1-1h2v-2q0-.0384.0028-.076C7.8864 14.4442 5.5 11.7508 5.5 8.5"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GenderFemaleFilledIcon);
export default ForwardRef;
