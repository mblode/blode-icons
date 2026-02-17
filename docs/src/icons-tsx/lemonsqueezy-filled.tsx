import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LemonsqueezyFilledIcon = (
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
      d="m9.6308 14.2751 5.3774 2.4808a2.75 2.75 0 0 1 1.3908 1.4158c.6417 1.4999-.2358 3.0332-1.6141 3.5849-1.3792.5508-2.8491.1958-3.5166-1.3633l-2.3408-5.4749c-.1808-.4241.275-.8416.7033-.6433m.3234-1.6049 5.5498-2.0942c1.845-.6958 3.8599.6209 3.8333 2.5333l-.0017.075c-.04 1.8633-1.9991 3.1158-3.8032 2.4566l-5.5732-2.0358a.495.495 0 0 1-.3353-.4654.495.495 0 0 1 .3303-.4695m-.3117-.725 5.4565-2.3141c1.8133-.7683 2.2733-3.0758.8533-4.4083a7 7 0 0 0-.0558-.0533c-1.3924-1.2891-3.6941-.835-4.4865.8642L8.9609 11.281c-.195.4183.2466.8492.6816.665zm-1.4041-.915 1.9833-5.4265a2.622 2.622 0 0 0-.0534-1.9516c-.6441-1.4992-2.3874-1.9833-3.7666-1.4308-1.3766.5541-2.1557 1.8082-1.4857 3.3665l2.3549 5.4682c.1833.4242.81.4075.9683-.025z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(LemonsqueezyFilledIcon);
export default ForwardRef;
