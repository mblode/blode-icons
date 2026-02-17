import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const StarLinesIcon = (
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
      d="m9 16.0001-4 4m2-9-4 4m13 1-4 4m.7832-15.0758-2.3218.5378c-.7343.17-1.0236 1.0605-.5295 1.6297l1.5622 1.7997c.1775.2045.2645.4722.2411.742l-.206 2.3743c-.0652.7509.6923 1.3013 1.3863 1.0072l2.1944-.9296a1 1 0 0 1 .7802 0l2.1944.9296c.694.2941 1.4515-.2563 1.3863-1.0072l-.206-2.3743a1 1 0 0 1 .2411-.742l1.5622-1.7997c.4941-.5692.2048-1.4597-.5295-1.6297l-2.3218-.5378a1 1 0 0 1-.6311-.4585l-1.2289-2.042c-.3887-.6458-1.3249-.6458-1.7136 0l-1.2289 2.042a1 1 0 0 1-.6311.4585"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(StarLinesIcon);
export default ForwardRef;
