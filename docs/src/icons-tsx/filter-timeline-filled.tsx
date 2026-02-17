import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FilterTimelineFilledIcon = (
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
      d="M6.0016 4c.5523 0 1 .4477 1 1v11.5849l1.2911-1.2918c.3904-.3906 1.0236-.3908 1.4142-.0004s.3908 1.0236.0004 1.4142l-2.9984 3a1 1 0 0 1-1.4142.0004l-3.0016-3c-.3906-.3904-.3908-1.0236-.0004-1.4142s1.0236-.3908 1.4142-.0004l1.2947 1.294V5c0-.5523.4477-1 1-1M12 6c-.5523 0-1 .4477-1 1s.4477 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1zM16 16c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1zM13 12c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FilterTimelineFilledIcon);
export default ForwardRef;
