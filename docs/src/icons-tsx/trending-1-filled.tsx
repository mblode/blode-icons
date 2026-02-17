import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Trending1FilledIcon = (
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
      d="M12.8642 5.004 9.879 14.6088c-.578 1.8595-3.1943 1.885-3.8073.036l-1.1804-3.5606-.9687 2.3131c-.2133.5094-.7992.7495-1.3086.5361-.5094-.2133-.7495-.7992-.5361-1.3086l.9694-2.3151c.7157-1.709 3.1597-1.6124 3.742.1438l1.1803 3.5603 2.9852-9.605c.6065-1.9516 3.3917-1.848 3.8565.1385l3.3812 14.4487 1.8642-5.3107c.1829-.5211.7537-.7953 1.2748-.6123.5211.1829.7952.7536.6123 1.2747l-1.8648 5.3125c-.6644 1.8929-3.3777 1.7409-3.8336-.2076z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Trending1FilledIcon);
export default ForwardRef;
