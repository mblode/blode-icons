import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Whiteboard1FilledIcon = (
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
      d="M13 3c0-.5523-.4477-1-1-1s-1 .4477-1 1v1H6C3.7909 4 2 5.7909 2 8v7c0 2.2091 1.7909 4 4 4h.6126l-.5613 1.6838c-.1746.5239.1085 1.0902.6325 1.2649s1.0902-.1085 1.2649-.6325L8.7207 19H11v1c0 .5523.4477 1 1 1s1-.4477 1-1v-1h2.2792l.7721 2.3162c.1747.524.741.8071 1.2649.6325.524-.1747.8071-.741.6325-1.2649L17.3874 19H18c2.2091 0 4-1.7909 4-4V8c0-2.2091-1.7909-4-4-4h-5z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Whiteboard1FilledIcon);
export default ForwardRef;
