import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const AirplayAudioIcon = (
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
      d="M9.04 19.9999c-.4192 0-.6523-.485-.3904-.8123l2.9597-3.6997c.2001-.2502.5807-.2502.7808 0l2.9597 3.6997c.2619.3273.0288.8123-.3904.8123z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M5 17.658c-2.864-3.5345-2.652-8.7339.636-12.022 3.5148-3.5147 9.2132-3.5147 12.728 0 3.2881 3.2881 3.5001 8.4875.636 12.022"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
    <path
      d="M7.5312 14.245A4.98 4.98 0 0 1 7 12c0-2.7614 2.2386-5 5-5s5 2.2386 5 5c0 .8073-.1913 1.57-.5311 2.245"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(AirplayAudioIcon);
export default ForwardRef;
