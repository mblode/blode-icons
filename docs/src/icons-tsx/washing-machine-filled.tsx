import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const WashingMachineFilledIcon = (
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
      d="M7 3C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V7c0-2.2091-1.7909-4-4-4zM5 6.25C5 5.5596 5.5596 5 6.25 5s1.25.5596 1.25 1.25S6.9404 7.5 6.25 7.5 5 6.9404 5 6.25m10.7826 8.0542c-.6902.3351-1.3714.443-2.039.3893-.8709-.07-1.6575-.4153-2.2711-.6876l-.0352-.0156c-.6554-.2908-1.1206-.4972-1.5764-.5581-.3857-.0515-.7754.0027-1.2598.367l-.4394.3305C8.6494 15.7887 10.1832 17 12 17c1.7525 0 3.2418-1.127 3.7826-2.6958m.0557-2.4338-.4394.3305c-.5948.4473-1.0701.5332-1.495.4991-.4843-.039-.976-.2364-1.6204-.5222l-.1293-.0577c-.5653-.2522-1.2772-.5699-2.0286-.6703-.6266-.0837-1.2692-.0192-1.9159.2686C8.744 10.1378 10.2391 9 12 9c1.8169 0 3.3508 1.2113 3.8383 2.8704"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(WashingMachineFilledIcon);
export default ForwardRef;
