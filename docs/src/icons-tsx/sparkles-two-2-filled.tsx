import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SparklesTwo2FilledIcon = (
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
      d="M8.75 16c0 .5523.4477 1 1 1s1-.4477 1-1c0-2.3085.5108-3.7424 1.3842-4.6158S14.4415 10 16.75 10c.5523 0 1-.4477 1-1s-.4477-1-1-1c-2.3085 0-3.7424-.5108-4.6158-1.3842S10.75 4.3085 10.75 2c0-.5523-.4477-1-1-1s-1 .4477-1 1c0 2.3085-.5108 3.7424-1.3842 4.6158S5.0585 8 2.75 8c-.5523 0-1 .4477-1 1s.4477 1 1 1c2.3085 0 3.7424.5108 4.6158 1.3842S8.75 13.6915 8.75 16M17.25 22c0 .5523.4477 1 1 1s1-.4477 1-1c0-1.4404.3198-2.2494.7852-2.7148S21.3096 18.5 22.75 18.5c.5523 0 1-.4477 1-1s-.4477-1-1-1c-1.4404 0-2.2494-.3198-2.7148-.7852S19.25 14.4404 19.25 13c0-.5523-.4477-1-1-1s-1 .4477-1 1c0 1.4404-.3198 2.2494-.7852 2.7148S15.1904 16.5 13.75 16.5c-.5523 0-1 .4477-1 1s.4477 1 1 1c1.4404 0 2.2494.3198 2.7148.7852S17.25 20.5596 17.25 22"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SparklesTwo2FilledIcon);
export default ForwardRef;
