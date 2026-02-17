import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VideoOffFilledIcon = (
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
      d="M3.2871 2.3832c-.3407-.4347-.9693-.511-1.404-.1702s-.5108.9692-.1701 1.404l1.3268 1.6928C2.3938 6.0202 2 6.964 2 8v8c0 2.2092 1.7909 4 4 4h6c.7667 0 1.483-.2157 2.0916-.5897l2.1214 2.7066c.3407.4347.9692.5109 1.4039.1702s.5109-.9693.1702-1.4039z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="m7.0955 4 9.2358 11.7837 2.7743 1.3871C20.4354 17.8357 22 16.8688 22 15.382V8.618c0-1.4867-1.5646-2.4537-2.8944-1.7888L16 8.382V8c0-2.2091-1.7908-4-4-4zM16 13.382l4 2V8.618l-4 2.0001z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(VideoOffFilledIcon);
export default ForwardRef;
