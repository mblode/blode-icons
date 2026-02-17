import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const EmojiAddReactionIcon = (
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
      d="M14.8284 14.8284c-1.5621 1.5621-4.0947 1.5621-5.6568 0M9.25 9.5v-.01m5.5.01v-.01M19 2v6m-3-3h6M11 3.0554c-1.9596.2178-3.8613 1.078-5.364 2.5806-3.5147 3.5147-3.5147 9.2132 0 12.7279 3.5147 3.5148 9.2132 3.5148 12.7279 0 1.5027-1.5026 2.3629-3.4043 2.5807-5.3639M9.5 9.5c0 .2761-.112.5-.25.5S9 9.7761 9 9.5s.112-.5.25-.5.25.2239.25.5m5.5 0c0 .2761-.1119.5-.25.5s-.25-.2239-.25-.5.1119-.5.25-.5.25.2239.25.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(EmojiAddReactionIcon);
export default ForwardRef;
