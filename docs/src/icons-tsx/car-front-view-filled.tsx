import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CarFrontViewFilledIcon = (
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
      d="M5.2774 5.7812A4 4 0 0 1 8.6055 4h6.7889a4 4 0 0 1 3.3282 1.7812L20.8685 9H22c.5523 0 1 .4477 1 1s-.4477 1-1 1h-.1045c.0691.2963.1045.601.1045.9083V18c0 1.1046-.8954 2-2 2h-1c-1.1046 0-2-.8954-2-2H7c0 1.1046-.8954 2-2 2H4c-1.1046 0-2-.8954-2-2v-6.0917c0-.3073.0354-.612.1045-.9083H2c-.5523 0-1-.4477-1-1s.4477-1 1-1h1.1315zM5 13c0-.5523.4477-1 1-1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H6c-.5523 0-1-.4477-1-1m11 0c0-.5523.4477-1 1-1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1c-.5523 0-1-.4477-1-1"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(CarFrontViewFilledIcon);
export default ForwardRef;
