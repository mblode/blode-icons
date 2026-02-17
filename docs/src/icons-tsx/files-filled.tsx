import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FilesFilledIcon = (
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
      d="M17.8986 18.8987C17.4908 20.6751 15.9002 22 14 22H8c-2.2091 0-4-1.7909-4-4V9c0-1.9001 1.325-3.4908 3.1014-3.8986C7.5092 3.3249 9.0999 2 11 2h3v4c0 1.6569 1.3431 3 3 3h4v6c0 1.9002-1.3249 3.4909-3.1014 3.8987M7 7.2676C6.4022 7.6134 6 8.2597 6 9v9c0 1.1046.8954 2 2 2h6c.7403 0 1.3866-.4022 1.7324-1H11c-2.2091 0-4-1.7909-4-4z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M16 2.5858 20.4142 7H17c-.5523 0-1-.4477-1-1z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FilesFilledIcon);
export default ForwardRef;
