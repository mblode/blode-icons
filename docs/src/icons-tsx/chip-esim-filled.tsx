import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChipEsimFilledIcon = (
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
      d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm6 12v-.5c0-.5523-.4477-1-1-1s-1 .4477-1 1v.5c-1.1046 0-2-.8954-2-2V7c0-1.1046.8954-2 2-2v.5c0 .5523.4477 1 1 1s1-.4477 1-1V5h2v.5c0 .5523.4477 1 1 1s1-.4477 1-1V5h2v.5c0 .5523.4477 1 1 1s1-.4477 1-1V5c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2v-.5c0-.5523-.4477-1-1-1s-1 .4477-1 1v.5h-2v-.5c0-.5523-.4477-1-1-1s-1 .4477-1 1v.5zm-2-9c0-1.1046.8954-2 2-2h6c1.1046 0 2 .8954 2 2v4c0 1.1046-.8954 2-2 2H9c-1.1046 0-2-.8954-2-2z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(ChipEsimFilledIcon);
export default ForwardRef;
