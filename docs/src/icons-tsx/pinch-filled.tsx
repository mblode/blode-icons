import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PinchFilledIcon = (
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
      d="M2.8606 6.8173c.5151.1991.7713.7781.5721 1.2933-.577 1.4924-.577 2.7864 0 4.2788.1992.5151-.057 1.0942-.5721 1.2933-.5151.1992-1.0942-.057-1.2933-.5721-.7564-1.9565-.7564-3.7647 0-5.7212.1991-.5151.7782-.7713 1.2933-.5721"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="m11.3871 8.2172 4.8798-2.9215c1.6171-.9681 3.6848-.3936 4.6184 1.2832l1.0307 1.8513c2.2315 4.008.9072 9.1331-2.9579 11.4471-2.5984 1.5556-5.814 1.4904-8.3518-.1694l-5.5714-3.6441a1 1 0 0 1-.442-.9822l.111-.7558c.1874-1.2761 1.337-2.153 2.5676-1.9587l1.3386.2114-3.3808-6.0723c-.6224-1.1178-.253-2.5473.825-3.1927s2.4565-.2624 3.0789.8555z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(PinchFilledIcon);
export default ForwardRef;
