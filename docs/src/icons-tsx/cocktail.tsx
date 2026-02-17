import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CocktailIcon = (
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
      d="M11.9993 13v8m0-8L3.8615 7.6734C2.1985 6.5849 2.9692 4 4.9568 4h14.0851c1.9875 0 2.7583 2.5849 1.0953 3.6734zm0 8h-4m4 0h4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CocktailIcon);
export default ForwardRef;
