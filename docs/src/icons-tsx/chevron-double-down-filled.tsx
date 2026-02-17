import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChevronDoubleDownFilledIcon = (
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
      d="M7.2929 5.7929c.3905-.3905 1.0237-.3905 1.4142 0l2.9393 2.9393a.5.5 0 0 0 .7072 0l2.9393-2.9393c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142l-2.9393 2.9393c-.9763.9764-2.5593.9764-3.5356 0L7.2929 7.2071c-.3905-.3905-.3905-1.0237 0-1.4142m0 7c.3905-.3905 1.0237-.3905 1.4142 0l2.9393 2.9393a.5.5 0 0 0 .7072 0l2.9393-2.9393c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142l-2.9393 2.9393c-.9763.9764-2.5593.9764-3.5356 0l-2.9393-2.9393c-.3905-.3905-.3905-1.0237 0-1.4142"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ChevronDoubleDownFilledIcon);
export default ForwardRef;
