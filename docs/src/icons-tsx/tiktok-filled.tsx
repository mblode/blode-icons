import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TiktokFilledIcon = (
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
      d="M20.7153 10.2134c-1.7796 0-3.4273-.5654-4.7728-1.5264v6.9856C15.9425 19.1671 13.1082 22 9.612 22c-1.3045 0-2.517-.3942-3.5242-1.0702-1.6923-1.1357-2.8065-3.0668-2.8065-5.2572 0-3.4943 2.8343-6.3272 6.3308-6.3271a6.4 6.4 0 0 1 .8686.059v.7755l-.0001 2.724a2.9 2.9 0 0 0-.8789-.1356c-1.5994 0-2.8958 1.2959-2.8958 2.8943 0 1.1301.648 2.1087 1.593 2.5854a2.886 2.886 0 0 0 1.3028.3088c1.5962 0 2.8903-1.2906 2.8958-2.8843V2h3.445v.4403q.0182.1976.0525.393c.239 1.363 1.0545 2.5276 2.1863 3.2335a4.774 4.774 0 0 0 2.5341.7236z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TiktokFilledIcon);
export default ForwardRef;
