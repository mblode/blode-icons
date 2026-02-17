import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FinderFilledIcon = (
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
      d="M7 3h4.9172c-.9045 3.2598-1.4674 6.5325-1.6655 9.942A1 1 0 0 0 11.25 14h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-.9276c.2512-3.066.814-6.0302 1.6735-9H17c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4V7c0-2.2091 1.7909-4 4-4m2 6c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 .5523.4477 1 1 1s1-.4477 1-1zm8 0c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 .5523.4477 1 1 1s1-.4477 1-1zm-8.4453 5.6679c-.4595-.3063-1.0804-.1821-1.3868.2774s-.1821 1.0804.2774 1.3868C9.0192 17.3813 10.4664 18 12 18s2.9809-.6187 4.5547-1.6679c.4595-.3064.5837-.9273.2774-1.3868s-.9273-.5837-1.3868-.2774C14.0191 15.6187 12.9664 16 12 16s-2.0191-.3813-3.4453-1.3321"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FinderFilledIcon);
export default ForwardRef;
