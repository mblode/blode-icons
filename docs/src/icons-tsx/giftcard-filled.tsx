import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GiftcardFilledIcon = (
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
      d="M13 4H6C3.7909 4 2 5.7909 2 8v3h9.5858l-1.2929-1.2929c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0L13 9.5858zM2 13v3c0 2.2091 1.7909 4 4 4h7v-5.5858l-1.2929 1.2929c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L11.5858 13zM15 20h3c2.2091 0 4-1.7909 4-4v-3h-5.5858l1.2929 1.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L15 14.4142zM22 11V8c0-2.2091-1.7909-4-4-4h-3v5.5858l1.2929-1.293c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L16.4142 11z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GiftcardFilledIcon);
export default ForwardRef;
