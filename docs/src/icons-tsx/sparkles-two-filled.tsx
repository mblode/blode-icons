import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SparklesTwoFilledIcon = (
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
      d="M16.75 8c0-.5523-.4477-1-1-1s-1 .4477-1 1c0 2.3085-.5108 3.7424-1.3842 4.6158S11.0585 14 8.75 14c-.5523 0-1 .4477-1 1s.4477 1 1 1c2.3085 0 3.7424.5108 4.6158 1.3842S14.75 19.6915 14.75 22c0 .5523.4477 1 1 1s1-.4477 1-1c0-2.3085.5108-3.7424 1.3842-4.6158S20.4415 16 22.75 16c.5523 0 1-.4477 1-1s-.4477-1-1-1c-2.3085 0-3.7424-.5108-4.6158-1.3842S16.75 10.3085 16.75 8M8.25 2c0-.5523-.4477-1-1-1s-1 .4477-1 1c0 1.4404-.3198 2.2494-.7852 2.7148S4.1904 5.5 2.75 5.5c-.5523 0-1 .4477-1 1s.4477 1 1 1c1.4404 0 2.2494.3198 2.7148.7852S6.25 9.5596 6.25 11c0 .5523.4477 1 1 1s1-.4477 1-1c0-1.4404.3198-2.2494.7852-2.7148S10.3096 7.5 11.75 7.5c.5523 0 1-.4477 1-1s-.4477-1-1-1c-1.4404 0-2.2494-.3198-2.7148-.7852S8.25 3.4404 8.25 2"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SparklesTwoFilledIcon);
export default ForwardRef;
