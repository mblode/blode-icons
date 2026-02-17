import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PackageFilledIcon = (
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
      d="M7 3h1v4.5C8 8.8807 9.1193 10 10.5 10h3c1.3807 0 2.5-1.1193 2.5-2.5V3h1c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4V7c0-2.2091 1.7909-4 4-4m8 13c-.5523 0-1 .4477-1 1s.4477 1 1 1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M10 3h4v4.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PackageFilledIcon);
export default ForwardRef;
