import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VideoFilledIcon = (
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
      d="M2 8c0-2.2091 1.7909-4 4-4h6c2.2091 0 4 1.7909 4 4v.3818l3.1056-1.5528C20.4354 6.164 22 7.131 22 8.6178v6.7639c0 1.4868-1.5646 2.4538-2.8944 1.7889L16 15.6178V16c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4zm14 5.3817 4 2V8.6178l-4 2z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(VideoFilledIcon);
export default ForwardRef;
