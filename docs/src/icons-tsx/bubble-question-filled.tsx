import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleQuestionFilledIcon = (
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
      d="M7.002 3h9.9999c2.2092 0 4.0001 1.7909 4.0001 4v8.0358c0 2.2091-1.7909 3.9999-4 4h-1.6263l-2.74 2.27a1 1 0 0 1-1.2804-.0037l-2.7037-2.2663H7.0019c-2.209 0-4-1.7909-4-4V7c0-2.2091 1.791-4 4-4m2.6214 6.1777c0-1.38 1.11-2.5144 2.5-2.5144s2.5 1.1344 2.5 2.5144c0 1.1279-.7436 1.7163-1.1799 2.0129-.138.0938-.2297.1766-.2936.2625-.0578.0778-.113.1846-.1392.3588-.082.5461-.5913.9224-1.1374.8403-.5462-.082-.9224-.5912-.8404-1.1374.1583-1.0543.7782-1.6329 1.2862-1.9782.1571-.1068.2297-.1753.2669-.2258.0259-.0352.0303-.0724.035-.1136l.0024-.0195c0-.2934-.2325-.5144-.5-.5144s-.5.221-.5.5144c0 .5523-.4477 1-1 1s-1-.4477-1-1m2.3764 6.5723c-.6904 0-1.25-.5596-1.25-1.25s.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25-.5597 1.25-1.25 1.25"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BubbleQuestionFilledIcon);
export default ForwardRef;
