import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const HourglassFilledIcon = (
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
      d="M5 4H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h16c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1v2.3945a4 4 0 0 1-1.7812 3.3282L13.8028 12l3.416 2.2773A4 4 0 0 1 19 17.6056V20h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h1v-2.3944a4 4 0 0 1 1.7812-3.3282L10.1972 12l-3.416-2.2774A4 4 0 0 1 5 6.3946zm2 0v2.3945c0 .2082.0324.4122.0938.6055h9.8123A2 2 0 0 0 17 6.3945V4zm10 14v-.3944a2 2 0 0 0-.8906-1.6641L12 13.2019l-4.1094 2.7396A2 2 0 0 0 7 17.6056V18z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(HourglassFilledIcon);
export default ForwardRef;
