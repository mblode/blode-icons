import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MaskIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 12.5V7.1814C4 5.2811 5.7456 3.8685 7.6333 4.087c2.9288.3387 5.8046.3387 8.7334 0C18.2544 3.8685 20 5.281 20 7.1814V12.5c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M15.1593 13.4157q-3.1587 1.2934-6.3174 0c-.4445-.182-.902.256-.6325.6535 2.0278 2.991 5.5546 2.991 7.5824 0 .2696-.3975-.188-.8355-.6325-.6535"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M10.4931 10.6996a.05.05 0 0 1 .0027-.0127c-.0013.0093-.0024.0131-.0027.0127Zm.2763-.1993.0024.0002zm-.2921-.1016c-.2845-.1129-.7494-.2929-1.2273-.2929s-.9428.18-1.2273.2929C8.13 9.9118 8.6078 9.5 9.25 9.5s1.12.4118 1.2273.8987Zm-2.4704.3009c-.0003.0004-.0014-.0034-.0027-.0127a.05.05 0 0 1 .0027.0127Zm-.2787-.1991.0024-.0002z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinejoin="round"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M16.5 10.6058c0 .5363-.2865.424-.7268.2514-.2877-.1128-.6412-.2514-1.0232-.2514s-.7355.1386-1.0232.2514c-.4403.1726-.7268.2849-.7268-.2514C13 9.719 13.7835 9 14.75 9s1.75.719 1.75 1.6058"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MaskIcon);
export default ForwardRef;
