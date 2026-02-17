import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BubbleAnnotation5FilledIcon = (
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
      d="M19.5674 5.357C17.6899 3.7915 15.0647 3 12 3s-5.6898.7916-7.5674 2.357C2.5332 6.9403 1.5 9.2334 1.5 12c0 .8165.2693 1.8187.5126 2.578.2535.7911.5245 1.4542.601 1.6378l.0128.0303.0077.018.002.0047c.0093.0269.0903.2752.0325.7086-.0601.4503-.277 1.1544-.9655 2.0624a1 1 0 0 0 .3688 1.5079c1.3871.657 2.7729.424 3.724.094a7.06 7.06 0 0 0 1.1199-.5039C8.5574 20.8505 10.3806 21 12 21c3.0647 0 5.6899-.7916 7.5674-2.3569C21.4668 17.0596 22.5 14.7665 22.5 12s-1.0332-5.0596-2.9326-6.643M2.636 16.2687l-.0008-.0023.0015.0039zM6.25 12c0 .6904.5596 1.25 1.25 1.25s1.25-.5596 1.25-1.25-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25m4.5 0c0 .6904.5596 1.25 1.25 1.25s1.25-.5596 1.25-1.25-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25m5.75 1.25c-.6904 0-1.25-.5596-1.25-1.25s.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25-.5596 1.25-1.25 1.25"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BubbleAnnotation5FilledIcon);
export default ForwardRef;
