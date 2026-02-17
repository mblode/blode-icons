import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const InsertHtmlIcon = (
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
      d="m17 8 3.2929 3.2929c.3905.3905.3905 1.0237 0 1.4142L17 16M7 16l-3.2929-3.2929c-.3905-.3905-.3905-1.0237 0-1.4142L7 8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(InsertHtmlIcon);
export default ForwardRef;
