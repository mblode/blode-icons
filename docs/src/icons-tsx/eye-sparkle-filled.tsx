import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const EyeSparkleFilledIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    height={24}
    ref={ref}
    viewBox="0 0 25 24"
    width={25}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M22.8176 10.1138C20.2573 6.1068 16.5541 4 12.7503 4s-7.507 2.1068-10.0672 6.1139c-.7337 1.1484-.7337 2.6239 0 3.7723C5.2434 17.8933 8.9466 20 12.7504 20s7.5069-2.1068 10.0672-6.1139c.7337-1.1484.7337-2.6239 0-3.7723M12.3028 8.8944l-.8116 1.6232a.5.5 0 0 1-.2236.2236l-1.6232.8116c-.3685.1842-.3685.7102 0 .8944l1.6232.8116a.5.5 0 0 1 .2236.2236l.8116 1.6232c.1842.3685.7102.3685.8944 0l.8116-1.6232a.5.5 0 0 1 .2236-.2236l1.6232-.8116c.3685-.1842.3685-.7102 0-.8944l-1.6232-.8116a.5.5 0 0 1-.2236-.2236l-.8116-1.6232c-.1842-.3685-.7102-.3685-.8944 0"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(EyeSparkleFilledIcon);
export default ForwardRef;
