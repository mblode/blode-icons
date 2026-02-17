import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VoiceAndVideoFilledIcon = (
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
      d="M3 8c0-2.2091 1.7909-4 4-4s4 1.7909 4 4v5c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4zm10-2c0-.5523.4477-1 1-1h2c2.0347 0 3.7146 1.5193 3.9672 3.4853l1.2312-.5387C22.5197 7.3686 24 8.3366 24 9.779v4.442c0 1.4423-1.4803 2.4104-2.8016 1.8323l-1.2312-.5386C19.7147 17.4807 18.0348 19 16 19c-.5523 0-1-.4477-1-1s.4477-1 1-1c1.1046 0 2-.8954 2-2v-.9782a1 1 0 0 1 0-.0448v-3.9541a1 1 0 0 1 0-.0449V9c0-1.1046-.8954-2-2-2h-2c-.5523 0-1-.4477-1-1M1 12c.5523 0 1 .4477 1 1 0 2.7614 2.2386 5 5 5s5-2.2386 5-5c0-.5523.4477-1 1-1s1 .4477 1 1c0 3.866-3.134 7-7 7s-7-3.134-7-7c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(VoiceAndVideoFilledIcon);
export default ForwardRef;
