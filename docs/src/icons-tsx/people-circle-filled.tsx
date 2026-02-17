import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PeopleCircleFilledIcon = (
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
      d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10m3-12c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3m-2.9998 10c-2.2384 0-4.262-.9193-5.714-2.4009C7.6178 16.005 9.6048 15 12.0001 15s4.3823 1.005 5.7141 2.5991C16.2623 19.0807 14.2386 20 12.0002 20"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PeopleCircleFilledIcon);
export default ForwardRef;
