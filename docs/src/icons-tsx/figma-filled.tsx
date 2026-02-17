import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FigmaFilledIcon = (
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
      d="M8.6615 2C6.8215 2 5.328 3.4933 5.328 5.3333c0 1.8352 1.4856 3.3255 3.319 3.3333C6.8136 8.6744 5.328 10.1648 5.328 12c0 1.84 1.4934 3.3334 3.3334 3.3334h3.3333v-3.3128c.0111 1.8305 1.5001 3.3128 3.3333 3.3128 1.84 0 3.3333-1.4934 3.3333-3.3334 0-1.8353-1.4857-3.3257-3.3192-3.3333 1.8335-.0076 3.3192-1.498 3.3192-3.3333 0-1.84-1.4933-3.3333-3.3333-3.3333zm6.6461 6.6667h-3.3128v3.3127c.011-1.8237 1.489-3.3017 3.3128-3.3127"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M8.6615 22c1.84 0 3.3333-1.4933 3.3333-3.3333v-3.3334H8.6615c-1.84 0-3.3333 1.4934-3.3333 3.3334S6.8215 22 8.6615 22"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FigmaFilledIcon);
export default ForwardRef;
