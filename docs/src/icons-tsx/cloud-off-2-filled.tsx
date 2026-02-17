import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CloudOff2FilledIcon = (
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
      d="M18 19.9998c2.7614 0 5-2.2386 5-5 0-2.4397-1.7474-4.4713-4.0588-4.9116-.1778-1.367-.75-2.6102-1.5987-3.6116l-6.9548 13.5232zM16.3893 3.9576c.2526-.4912.0592-1.094-.432-1.3467s-1.094-.0592-1.3466.432l-.6375 1.2396A7 7 0 0 0 12 4.0002c-2.8581 0-5.314 1.7124-6.4018 4.1649C2.9604 8.7967 1 11.1688 1 14.0002c0 2.9513 2.1308 5.4049 4.938 5.9063l-.3273.6364c-.2526.4911-.0592 1.094.432 1.3466.491.2526 1.094.0592 1.3466-.4319z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CloudOff2FilledIcon);
export default ForwardRef;
