import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Hand4FingerFilledIcon = (
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
      d="M13.9212 2c-.913 0-1.6531.7462-1.6531 1.6667v6.111c0 .3069-.2467.5556-.551.5556s-.551-.2487-.551-.5555v-5c0-.9205-.7402-1.6667-1.6532-1.6667S7.86 3.8573 7.86 4.7778v6.6666a.556.556 0 0 1-.3402.5133.548.548 0 0 1-.6006-.1204l-1.0138-1.0222c-.6967-.7024-1.8443-.6383-2.4598.1374L3 11.5139l3.1877 6.4278C7.4212 20.4289 9.9427 22 12.7008 22c4.0217 0 7.2818-3.2869 7.2818-7.3415v-4.3252A.56.56 0 0 1 20 10.1944a.56.56 0 0 1-.0174-.1388V5.6111c0-.9205-.7401-1.6667-1.6531-1.6667s-1.6531.7462-1.6531 1.6667v5c0 .3068-.2467.5556-.551.5556s-.5511-.2488-.5511-.5556V3.6667c0-.9205-.7401-1.6667-1.6531-1.6667"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Hand4FingerFilledIcon);
export default ForwardRef;
