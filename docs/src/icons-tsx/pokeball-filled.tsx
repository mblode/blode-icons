import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PokeballFilledIcon = (
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
      d="M21.952 13h-6.0766c-.4441 1.7252-2.0102 3-3.874 3s-3.43-1.2748-3.874-3H2.0508c.5017 5.0533 4.7653 9 9.9506 9s9.4489-3.9467 9.9506-9M21.952 11c-.5017-5.0533-4.7652-9-9.9506-9s-9.4489 3.9467-9.9506 9h6.0766c.444-1.7252 2.0102-3 3.874-3s3.4299 1.2748 3.874 3z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M10.0014 12c0-1.1046.8954-2 2-2s2 .8954 2 2-.8954 2-2 2-2-.8954-2-2"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PokeballFilledIcon);
export default ForwardRef;
