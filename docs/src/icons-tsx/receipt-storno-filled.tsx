import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ReceiptStornoFilledIcon = (
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
      d="M8 2C5.7909 2 4 3.7909 4 6v15a1 1 0 0 0 1.6508.7593l1.6825-1.4422 1.6826 1.4422c.3745.3209.927.3209 1.3016 0L12 20.3171l1.6825 1.4422a1 1 0 0 0 1.3016 0l1.6826-1.4422 1.6825 1.4422A1.0001 1.0001 0 0 0 20 21V6c0-2.2091-1.7909-4-4-4zm0 13c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1m6.4268-6.7626c.3905-.3905.3905-1.0236 0-1.4142s-1.0237-.3905-1.4142 0L12 7.8358l-1.0126-1.0126c-.3905-.3905-1.0236-.3905-1.4142 0s-.3905 1.0237 0 1.4142L10.5858 9.25l-1.0126 1.0126c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0L12 10.6642l1.0126 1.0126c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L13.4142 9.25z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ReceiptStornoFilledIcon);
export default ForwardRef;
