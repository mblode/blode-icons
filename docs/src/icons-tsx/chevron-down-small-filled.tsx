import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronDownSmallFilledIcon = (
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
      d="M12.3536 12.2322a.5.5 0 0 1-.7072 0L8.7071 9.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l2.9393 2.9393c.9763.9763 2.5593.9763 3.5356 0l2.9393-2.9393c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronDownSmallFilledIcon);
export default ForwardRef;
