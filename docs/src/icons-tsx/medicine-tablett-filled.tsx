import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MedicineTablettFilledIcon = (
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
      d="M11.0415 4.0435c2.4616-2.4616 6.4526-2.4616 8.9142 0s2.4616 6.4526 0 8.9142l-2.7929 2.7929-8.9142-8.9142zM6.8344 8.2506l-2.7929 2.7929c-2.4616 2.4616-2.4616 6.4526 0 8.9142s6.4526 2.4616 8.9142 0l2.7929-2.7929z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MedicineTablettFilledIcon);
export default ForwardRef;
