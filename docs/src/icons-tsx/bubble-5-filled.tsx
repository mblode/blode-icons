import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Bubble5FilledIcon = (
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
      d="M12 3c3.0647 0 5.6899.7916 7.5674 2.357C21.4668 6.9403 22.5 9.2334 22.5 12s-1.0332 5.0596-2.9326 6.6431C17.6899 20.2084 15.0647 21 12 21c-1.6193 0-3.4426-.1495-5.0842-.8622a7.06 7.06 0 0 1-1.1198.5039c-.9512.33-2.337.563-3.724-.094a1.0003 1.0003 0 0 1-.3689-1.5079c.6884-.908.9054-1.6121.9655-2.0624.0578-.4334-.0232-.6817-.0326-.7086l.0007.0016-.0015-.0039.0008.0023-.0019-.0047-.0077-.018-.0128-.0303a21.8 21.8 0 0 1-.601-1.6378C1.7693 13.8187 1.5 12.8165 1.5 12c0-2.7665 1.0332-5.0596 2.9326-6.643C6.3102 3.7915 8.9353 3 12 3"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Bubble5FilledIcon);
export default ForwardRef;
