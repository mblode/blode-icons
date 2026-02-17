import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TelephoneFilledIcon = (
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
      d="M6 3C4.3431 3 3 4.3431 3 6c0 8.2843 6.7157 15 15 15 1.6569 0 3-1.3431 3-3v-1.1459a4 4 0 0 0-2.2111-3.5777l-1.3508-.6754a2.537 2.537 0 0 0-2.9286.4752c-.1679.168-.366.1745-.4821.1158-1.4748-.7466-2.4728-1.7446-3.2194-3.2194-.0587-.116-.0522-.3142.1158-.4822a2.537 2.537 0 0 0 .4752-2.9285l-.6754-1.3507A4 4 0 0 0 7.1459 3z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TelephoneFilledIcon);
export default ForwardRef;
