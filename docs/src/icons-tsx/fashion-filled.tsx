import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FashionFilledIcon = (
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
      d="M9.5076 3.5356c-.3518-.4985-.9998-.7945-1.5476-.5262L2.604 5.6327C1.535 6.1563.9907 7.3675 1.3092 8.5147c.3764 1.3554 1.8062 2.1242 3.1444 1.6907l.5458-.1769v6.9719c0 2.2091 1.7909 4 4 4h6c2.2092 0 4-1.7909 4-4v-6.9719l.5458.1768c1.3382.4336 2.7681-.3352 3.1444-1.6906.3186-1.1471-.2256-2.3584-1.2948-2.882l-5.3559-2.6233c-.5479-.2683-1.1959.0277-1.5477.5262-1.2437 1.7627-3.7399 1.7627-4.9836 0"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FashionFilledIcon);
export default ForwardRef;
