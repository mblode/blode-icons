import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Scissors2FilledIcon = (
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
      d="M6 3C3.7909 3 2 4.7909 2 7s1.7909 4 4 4c1.025 0 1.96-.3856 2.6679-1.0196L11.6973 12l-3.0294 2.0196A3.985 3.985 0 0 0 6 13c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4 4-1.7909 4-4a4 4 0 0 0-.2218-1.3169l12.6086-8.4057c-.6127-.9191-1.8545-1.1674-2.7735-.5548L13.5 10.7983 9.7782 8.3169A4 4 0 0 0 10 7c0-2.2091-1.7909-4-4-4M4 7c0-1.1046.8954-2 2-2s2 .8954 2 2-.8954 2-2 2-2-.8954-2-2m0 10c0-1.1046.8954-2 2-2s2 .8954 2 2-.8954 2-2 2-2-.8954-2-2"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="m19.6133 17.2774-5.2119-3.4746 1.8028-1.2019 6.1826 4.1218c-.6127.919-1.8545 1.1674-2.7735.5547"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Scissors2FilledIcon);
export default ForwardRef;
