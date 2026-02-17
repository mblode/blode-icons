import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CopyrightFilledIcon = (
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
      d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12m12.1213 2.1213c-1.1716 1.1716-3.0711 1.1716-4.2426 0s-1.1716-3.071 0-4.2426 3.071-1.1716 4.2426 0c.3905.3905 1.0237.3905 1.4142 0 .3906-.3906.3906-1.0237 0-1.4142-1.9526-1.9527-5.1184-1.9527-7.071 0-1.9527 1.9526-1.9527 5.1184 0 7.071 1.9526 1.9527 5.1184 1.9527 7.071 0 .3906-.3905.3906-1.0237 0-1.4142s-1.0237-.3905-1.4142 0"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CopyrightFilledIcon);
export default ForwardRef;
