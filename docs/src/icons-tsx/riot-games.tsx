import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const RiotGamesIcon = (
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
      d="m2.5 8.1122 10.6542-4.934L21.5 5.2689v10.9389l-3.4529.424-1.3775-7.813-.6644.2956.672 7.6856-3.4928.4294-1.2599-7.1442-.6569.2923.6137 7.0115-3.4528.4239-1.1456-6.4937-.6634.2956.5555 6.3524-2.0203.2481zM13.5803 19.4956l-.1758-.9946h.0043l8.0912-.9945v3.3094z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(RiotGamesIcon);
export default ForwardRef;
