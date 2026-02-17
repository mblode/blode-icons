import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SettingsGear1FilledIcon = (
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
      d="M3 9.2543A4 4 0 0 1 5.039 5.768l5-2.8124a4 4 0 0 1 3.922 0l5 2.8124A4 4 0 0 1 21 9.2545v5.4908a4 4 0 0 1-2.039 3.4864l-5 2.8124a4 4 0 0 1-3.922.0001l-5-2.8122A4 4 0 0 1 3 14.7455zM8.5 12c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(SettingsGear1FilledIcon);
export default ForwardRef;
