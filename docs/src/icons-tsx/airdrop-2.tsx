import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Airdrop2Icon = (
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
      d="M14 21h-4c-1.1046 0-2-.8954-2-2s.8954-2 2-2h4c1.1046 0 2 .8954 2 2s-.8954 2-2 2M4 11l7 5.5m2 0 7-5.5M12 11v5M12 3c-4.4183 0-8 3.5817-8 8 0 0 4.8697-.5 8-.5s8 .5 8 .5c0-4.4183-3.5817-8-8-8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Airdrop2Icon);
export default ForwardRef;
