import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CloudSnowFilledIcon = (
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
      d="M13 18c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M7 18c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M10 20c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M19 18c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M16 20c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M9.5 3C5.9102 3 3 5.9101 3 9.5S5.9101 16 9.5 16H16c2.7614 0 5-2.2386 5-5s-2.2386-5-5-5c-.2282 0-.4533.0153-.6743.0452-.1907.0257-.3593-.0654-.426-.1648C13.7346 4.1454 11.7512 3 9.5 3"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CloudSnowFilledIcon);
export default ForwardRef;
