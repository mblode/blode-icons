import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CocktailFilledIcon = (
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
      d="M4.9911 3C2.0241 3 .8734 6.8774 3.356 8.5101l7.6488 5.0305V20H8.0191c-.5496 0-.9952.4477-.9952 1s.4456 1 .9952 1h7.9618c.5496 0 .9952-.4477.9952-1s-.4456-1-.9952-1h-2.9857v-6.4594l7.6488-5.0305C23.1266 6.8774 21.976 3 19.0089 3z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CocktailFilledIcon);
export default ForwardRef;
