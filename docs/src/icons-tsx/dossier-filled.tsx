import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const DossierFilledIcon = (
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
      d="M2 8c0-2.2091 1.7909-4 4-4h2v6h14v6c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M10 4h5v4h-5zM17 4h1c2.2091 0 4 1.7909 4 4h-5z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(DossierFilledIcon);
export default ForwardRef;
