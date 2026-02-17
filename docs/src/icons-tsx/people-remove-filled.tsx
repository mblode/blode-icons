import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PeopleRemoveFilledIcon = (
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
      d="M12 2C9.5147 2 7.5 4.0147 7.5 6.5S9.5147 11 12 11s4.5-2.0147 4.5-4.5S14.4853 2 12 2M4.5527 16.3886C5.9627 13.7661 8.6424 12 12 12c1.42 0 2.7188.3159 3.8515.8788a2.99 2.99 0 0 0-2.0942.8786c-1.1716 1.1715-1.1716 3.071 0 4.2426-.812.8119-1.0612 1.9734-.7478 3H7.7954c-1.1716 0-2.264-.521-2.9372-1.3586-.6976-.8677-.9347-2.0825-.3055-3.2528M16.7071 15.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142L16.5858 18l-1.2929 1.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0L18 19.4142l1.2929 1.2929c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L19.4142 18l1.2929-1.2929c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L18 16.5858z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PeopleRemoveFilledIcon);
export default ForwardRef;
