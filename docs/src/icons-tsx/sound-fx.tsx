import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const SoundFxIcon = (
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
      d="M5.2759 8H4c-1.1046 0-2 .8955-2 2v4c0 1.1046.8954 2 2 2h1.2759c.4679 0 .921.1641 1.2804.4636l3.8035 3.1696c.6513.5428 1.6402.0796 1.6402-.7682V5.135c0-.8477-.9889-1.3109-1.6402-.7681L6.5563 7.5365A2 2 0 0 1 5.2759 8"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M17.0991 13.7902c.1273-.3869.6745-.3869.8018 0l.3811 1.1588a.422.422 0 0 0 .269.269l1.1588.3811c.3869.1273.3869.6745 0 .8018l-1.1588.3811a.422.422 0 0 0-.269.269l-.3811 1.1588c-.1273.3869-.6745.3869-.8018 0l-.3811-1.1588a.422.422 0 0 0-.269-.269l-1.1588-.3811c-.3869-.1273-.3869-.6745 0-.8018l1.1588-.3811a.422.422 0 0 0 .269-.269zM18.9388 5.9062c.1781-.5416.9443-.5416 1.1224 0l.5336 1.6224a.59.59 0 0 0 .3766.3766l1.6224.5336c.5416.1781.5416.9443 0 1.1224l-1.6224.5336a.59.59 0 0 0-.3766.3766l-.5336 1.6224c-.1781.5416-.9443.5416-1.1224 0l-.5336-1.6224a.59.59 0 0 0-.3766-.3766l-1.6224-.5336c-.5416-.1781-.5416-.9443 0-1.1224l1.6224-.5336a.59.59 0 0 0 .3766-.3766z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(SoundFxIcon);
export default ForwardRef;
