import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GarageFilledIcon = (
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
      d="M9.9142 3.6027a4 4 0 0 1 4.1716 0l6 3.6667A4 4 0 0 1 22 10.6825V16c0 2.2092-1.7909 4-4 4H6c-2.2091 0-4-1.7908-4-4v-5.3175a4 4 0 0 1 1.9142-3.413zM8 18h8v-2H8zm0-4h8c0-1.1045-.8954-2-2-2h-4c-1.1046 0-2 .8955-2 2"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GarageFilledIcon);
export default ForwardRef;
