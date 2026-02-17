import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const BrillianceFilledIcon = (
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
      d="M6.7066 6.0016C5.0468 7.4674 4 9.6115 4 12c0 4.4183 3.5817 8 8 8 1.933 0 3.5-1.567 3.5-3.5 0-1.254-.4296-1.9056-1.0165-2.3577-.6746-.5197-1.6117-.8238-2.7806-1.1875l-.0826-.0256c-1.0648-.331-2.337-.7265-3.3243-1.4871C7.1954 10.5942 6.5 9.3459 6.5 7.5c0-.5194.072-1.022.2066-1.4984M12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10S17.5228 2 12 2"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(BrillianceFilledIcon);
export default ForwardRef;
