import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DirectorChairFilledIcon = (
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
      d="M20 11V6c0-2.2091-1.7909-4-4-4H8C5.7909 2 4 3.7909 4 6v5H3c-.5523 0-1 .4477-1 1s.4477 1 1 1h1.7064l5.4445 3.5-5.6915 3.6588c-.4646.2987-.5991.9174-.3005 1.382.2987.4645.9174.599 1.382.3004L12 17.6888l6.4593 4.1524c.4645.2986 1.0832.1641 1.3819-.3004s.1641-1.0833-.3004-1.382L13.8494 16.5l5.4444-3.5H21c.5523 0 1-.4477 1-1s-.4477-1-1-1zm-4.4047 2H8.4049l3.5952 2.3112z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(DirectorChairFilledIcon);
export default ForwardRef;
