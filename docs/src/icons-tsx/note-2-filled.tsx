import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Note2FilledIcon = (
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
      d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v6.2574a4 4 0 0 1-1.1716 2.8284l-3.7426 3.7426A4 4 0 0 1 13.2574 21H7c-2.2091 0-4-1.7909-4-4zm16 4c0 1.1046-.8954 2-2 2-2.2091 0-4 1.7909-4 4 0 1.1046-.8954 2-2 2H7c-1.1046 0-2-.8954-2-2V7c0-1.1046.8954-2 2-2h10c1.1046 0 2 .8954 2 2z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Note2FilledIcon);
export default ForwardRef;
