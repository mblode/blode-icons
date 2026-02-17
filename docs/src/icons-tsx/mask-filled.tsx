import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MaskFilledIcon = (
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
      d="M16.2518 3.0935C18.6721 2.8135 21 4.6232 21 7.1815V12.5c0 4.9705-4.0294 9-9 9s-9-4.0295-9-9V7.1814c0-2.5582 2.3279-4.3679 4.7482-4.088 2.8525.33 5.6511.33 8.5036 0M8.8413 13.4157q3.1587 1.2934 6.3174 0c.4445-.182.9021.256.6325.6535-2.0278 2.991-5.5546 2.991-7.5824 0-.2696-.3975.188-.8355.6325-.6535M11 10.6058c0 .5363-.2865.424-.7268.2514-.2877-.1128-.6412-.2514-1.0232-.2514s-.7355.1386-1.0232.2514c-.4403.1726-.7268.2849-.7268-.2514C7.5 9.719 8.2835 9 9.25 9S11 9.719 11 10.6058m4.7732.2514c.4403.1726.7268.2849.7268-.2514C16.5 9.719 15.7165 9 14.75 9S13 9.719 13 10.6058c0 .5363.2865.424.7268.2514.2877-.1128.6412-.2514 1.0232-.2514s.7355.1386 1.0232.2514"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MaskFilledIcon);
export default ForwardRef;
