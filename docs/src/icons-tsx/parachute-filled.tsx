import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ParachuteFilledIcon = (
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
      d="M14.9762 19.3795a1 1 0 0 0 .1152-.0731l7.5-5.5A1 1 0 0 0 23 13c0-6.0751-4.9249-11-11-11S1 6.9249 1 13a1 1 0 0 0 .4086.8064l7.5 5.5q.056.0409.1152.0731C9.2103 20.8572 10.4717 22 12 22s2.7897-1.1428 2.9762-2.6205m-.5131-2.0925 5.7805-4.239c-2.5123-1.541-4.9015-2.3788-7.2436-2.5639v5.6866a3.01 3.01 0 0 1 1.4631 1.1163m-4.9262 0A3.01 3.01 0 0 1 11 16.1707v-5.6866c-2.3421.1851-4.7313 1.0229-7.2436 2.5639z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ParachuteFilledIcon);
export default ForwardRef;
