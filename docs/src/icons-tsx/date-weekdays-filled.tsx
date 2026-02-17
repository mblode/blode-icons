import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DateWeekdaysFilledIcon = (
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
      d="M20 5.5c0 .8284-.6716 1.5-1.5 1.5S17 6.3284 17 5.5 17.6716 4 18.5 4s1.5.6716 1.5 1.5M20 12c0 .8284-.6716 1.5-1.5 1.5S17 12.8284 17 12s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5M12 3c-1.3807 0-2.5 1.1193-2.5 2.5S10.6193 8 12 8s2.5-1.1193 2.5-2.5S13.3807 3 12 3M12 9.5c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5 2.5-1.1193 2.5-2.5-1.1193-2.5-2.5-2.5M12 16c-1.3807 0-2.5 1.1193-2.5 2.5S10.6193 21 12 21s2.5-1.1193 2.5-2.5S13.3807 16 12 16M5.5 9.5C4.1193 9.5 3 10.6193 3 12s1.1193 2.5 2.5 2.5S8 13.3807 8 12 6.8807 9.5 5.5 9.5M5.5 16C4.1193 16 3 17.1193 3 18.5S4.1193 21 5.5 21 8 19.8807 8 18.5 6.8807 16 5.5 16"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(DateWeekdaysFilledIcon);
export default ForwardRef;
