import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SlidesWideFilledIcon = (
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
      d="M2 8c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4 2.2091 0 4 1.7909 4 4v4c0 2.2091-1.7909 4-4 4h-8c-2.2091 0-4-1.7909-4-4-2.2091 0-4-1.7909-4-4zm4 4v2c-1.1046 0-2-.8954-2-2V8c0-1.1046.8954-2 2-2h8c1.1046 0 2 .8954 2 2h-6c-2.2091 0-4 1.7909-4 4"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SlidesWideFilledIcon);
export default ForwardRef;
