import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleWideNotificationFilledIcon = (
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
      d="M19 2c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4 4-1.7909 4-4-1.7909-4-4-4m-2 4c0-1.1046.8954-2 2-2s2 .8954 2 2-.8954 2-2 2-2-.8954-2-2"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M13 6c0-1.0929.2922-2.1175.8027-3H6.002c-2.2092 0-4 1.7909-4 4v8.0358c0 2.2091 1.7908 4 4 4h2.6496l2.7037 2.2663a1 1 0 0 0 1.2804.0037l2.74-2.27h2.6263c2.2091-.0001 4-1.7909 4-4.0001v-3.8395C21.119 11.7074 20.0937 12 19 12c-3.3137 0-6-2.6863-6-6"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BubbleWideNotificationFilledIcon);
export default ForwardRef;
