import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const NotionAiFilledIcon = (
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
      d="M10.9049 3.693c-1.8767-1.124-4.203-.8375-5.7506.5464a.8612.8612 0 1 0 1.1482 1.284c1.0014-.8955 2.506-1.0782 3.7174-.3527.2958.1771.5508.394.7633.6392a.861.861 0 0 0 1.2148.087.861.861 0 0 0 .0868-1.215 4.87 4.87 0 0 0-1.1799-.989m1.7998 3.0514c1.3824-2.3083 4.3745-3.059 6.6828-1.6765a4.853 4.853 0 0 1 1.7034 1.7205.8613.8613 0 0 1-1.4877.8682 3.13 3.13 0 0 0-1.1006-1.111c-1.4923-.8936-3.4264-.4084-4.3202 1.0838L7.6816 18.4843l4.9612.8042a.8612.8612 0 0 1-.2756 1.7003l-6.2147-1.0074a.8613.8613 0 0 1-.601-1.2925zm4.394 4.2509c-.1268.7825-.864 1.3141-1.6465 1.1872-.7825-.1268-1.314-.864-1.1872-1.6465s.864-1.314 1.6466-1.1872c.7824.1268 1.314.864 1.1871 1.6465M9.5326 9.7691c-.1268.7825-.864 1.3141-1.6465 1.1873s-1.3141-.8641-1.1873-1.6466.864-1.314 1.6466-1.1872c.7825.1268 1.314.864 1.1872 1.6465"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(NotionAiFilledIcon);
export default ForwardRef;
