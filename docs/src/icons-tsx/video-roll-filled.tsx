import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VideoRollFilledIcon = (
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
      d="M18.001 20C20.4293 18.1755 22 15.2712 22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12s4.4772 10 10 10h9c.5523 0 1-.4477 1-1s-.4477-1-1-1zM12 9.75c.9665 0 1.75-.7835 1.75-1.75S12.9665 6.25 12 6.25s-1.75.7835-1.75 1.75.7835 1.75 1.75 1.75m-4 4c.9665 0 1.75-.7835 1.75-1.75S8.9665 10.25 8 10.25s-1.75.7835-1.75 1.75.7835 1.75 1.75 1.75M17.75 12c0 .9665-.7835 1.75-1.75 1.75s-1.75-.7835-1.75-1.75.7835-1.75 1.75-1.75 1.75.7835 1.75 1.75M12 17.75c.9665 0 1.75-.7835 1.75-1.75s-.7835-1.75-1.75-1.75-1.75.7835-1.75 1.75.7835 1.75 1.75 1.75"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(VideoRollFilledIcon);
export default ForwardRef;
