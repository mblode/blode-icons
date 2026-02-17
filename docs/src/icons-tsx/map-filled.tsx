import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MapFilledIcon = (
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
      d="m14 4.8626-4-1.3333v15.1082l4 1.3333zM16 19.9708l3.9487-1.3162A3 3 0 0 0 22 15.8085V7.0249c0-2.0477-2.0061-3.4936-3.9487-2.846L16 4.8626zM4.0513 4.8455 8 3.5293v15.1082l-2.0513.6838C4.006 19.9688 2 18.5229 2 16.4752V7.6916a3 3 0 0 1 2.0513-2.846"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MapFilledIcon);
export default ForwardRef;
