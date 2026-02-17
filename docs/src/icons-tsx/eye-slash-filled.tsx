import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const EyeSlashFilledIcon = (
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
      d="M2.2929 2.2929c.3905-.3905 1.0237-.3905 1.4142 0l18 18c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3.0899-3.0899c-2.4522 1.3672-5.184 1.7276-7.7983 1.0509-2.8612-.7407-5.5048-2.7017-7.4734-5.7838a3.5 3.5 0 0 1-.0007-3.767c.9255-1.4492 1.9998-2.6508 3.1777-3.5948L2.2929 3.7071c-.3905-.3905-.3905-1.0237 0-1.4142m10.2255 11.6397 1.5135 1.5135a3.984 3.984 0 0 1-2.032.5541c-2.2091 0-4-1.7908-4-4 0-.7414.2023-1.4365.554-2.032l1.5137 1.5136a2 2 0 0 0-.0677.5184c0 1.1046.8954 2 2 2a2 2 0 0 0 .5185-.0676"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M22.0676 13.8861c-.5257.8227-1.0995 1.5653-1.7125 2.226L8.7627 4.5197C9.8169 4.1749 10.9045 4 12.0003 4c3.8038 0 7.507 2.1067 10.0673 6.1138.7337 1.1484.7337 2.6239 0 3.7723"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(EyeSlashFilledIcon);
export default ForwardRef;
