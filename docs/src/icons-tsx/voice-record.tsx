import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const VoiceRecordIcon = (
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
    <circle
      cx={16.5}
      cy={15.5}
      r={4.5}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
    <circle
      cx={16.5}
      cy={15.5}
      fill="currentColor"
      r={2.5}
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="M3.004 9v2m3.5-7v12m3.4999-9v3m3.5-5v2.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      style={{
        stroke: "currentColor",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(VoiceRecordIcon);
export default ForwardRef;
