import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CalenderNextWeekFilledIcon = (
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
      d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm16 2H5v8c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2zM8.2929 11.7929c.3905-.3905 1.0237-.3905 1.4142 0l1.5 1.5c.3905.3905.3905 1.0237 0 1.4142l-1.5 1.5c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L9.0858 14l-.793-.7929c-.3904-.3905-.3904-1.0237 0-1.4142m4.75 0c.3905-.3905 1.0237-.3905 1.4142 0l1.5 1.5c.3905.3905.3905 1.0237 0 1.4142l-1.5 1.5c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L13.8358 14l-.7929-.7929c-.3905-.3905-.3905-1.0237 0-1.4142"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CalenderNextWeekFilledIcon);
export default ForwardRef;
