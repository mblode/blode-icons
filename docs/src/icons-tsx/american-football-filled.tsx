import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AmericanFootballFilledIcon = (
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
      d="M11.1617 2.576c-4.0929 1.263-7.3228 4.4928-8.5858 8.5857l10.2624 10.2624c4.0929-1.263 7.3228-4.4929 8.5858-8.5858zm3.2954 8.3811c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0l-3.5 3.5c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M2 15c0-.5074.029-1.0079.0856-1.5002l8.4146 8.4146A13.2 13.2 0 0 1 9 22H4c-1.1046 0-2-.8954-2-2zM21.9144 10.5002A13.2 13.2 0 0 0 22 9V4c0-1.1046-.8954-2-2-2h-5c-.5074 0-1.0079.029-1.5002.0856z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(AmericanFootballFilledIcon);
export default ForwardRef;
