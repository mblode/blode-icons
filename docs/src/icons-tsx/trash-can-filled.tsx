import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TrashCanFilledIcon = (
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
      d="M7.4173 5c.7715-1.7655 2.5324-3 4.5836-3 2.0513 0 3.8122 1.2345 4.5837 3H21c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1.0644l-.7511 11.2661C19.0444 20.3673 17.2992 22 15.1933 22H8.8067c-2.1059 0-3.8511-1.6327-3.9912-3.7339L4.0645 7H3c-.5523 0-1-.4477-1-1s.4477-1 1-1zm2.3473 0c.5497-.6139 1.3484-1 2.2363-1 .888 0 1.6867.3861 2.2364 1zM11 11c0-.5523-.4477-1-1-1s-1 .4477-1 1v5c0 .5523.4477 1 1 1s1-.4477 1-1zm3-1c.5523 0 1 .4477 1 1v5c0 .5523-.4477 1-1 1s-1-.4477-1-1v-5c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TrashCanFilledIcon);
export default ForwardRef;
