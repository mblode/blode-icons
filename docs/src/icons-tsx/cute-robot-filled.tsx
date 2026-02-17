import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CuteRobotFilledIcon = (
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
      clipRule="evenodd"
      d="M12.75 1c.5523 0 1 .4477 1 1v1h4c1.6569 0 3 1.3431 3 3v5c0 .8885-.3862 1.6868-1 2.2361v1.3497l1.7071 1.7071c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-.6119-.6119C18.5405 19.9377 15.8861 22 12.75 22s-5.7905-2.0623-6.681-4.9048l-.6119.6119c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L5.75 14.5858v-1.3497c-.6137-.5493-1-1.3476-1-2.2361V6c0-1.6569 1.3431-3 3-3h4V2c0-.5523.4477-1 1-1m-5 4c-.5523 0-1 .4477-1 1v5c0 .5523.4477 1 1 1h10c.5523 0 1-.4477 1-1V6c0-.5523-.4477-1-1-1zm2 2c.5523 0 1 .4477 1 1v1c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-.5523.4477-1 1-1m6 0c.5523 0 1 .4477 1 1v1c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-.5523.4477-1 1-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CuteRobotFilledIcon);
export default ForwardRef;
