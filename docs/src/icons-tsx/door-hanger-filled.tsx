import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DoorHangerFilledIcon = (
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
      d="M12 1c-1.96 0-3.5726.6356-4.7598 1.7896C6.0667 3.9302 5.388 5.4992 5.1266 7.241 4.8878 8.8323 6.2223 10 7.6154 10c1.3617 0 2.2775-1.0928 2.4863-2.1909.1166-.6128.3258-1.0599.6023-1.345C10.9547 6.2055 11.3362 6 12 6c1.1046 0 2 .8954 2 2v.117a3 3 0 0 1-2.0513 2.846l-3.5298 1.1766C6.377 12.8202 5 14.7309 5 16.883V19c0 2.2091 1.7909 4 4 4h6c2.2091 0 4-1.7909 4-4V8c0-3.866-3.134-7-7-7"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(DoorHangerFilledIcon);
export default ForwardRef;
