import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Checkmark2FilledIcon = (
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
      d="M21.6323 3.037c.67.4874.8181 1.4255.3308 2.0954l-11.4559 15.75a1.5 1.5 0 0 1-2.14.2971l-6.044-4.75c-.6514-.5119-.7645-1.4549-.2526-2.1063s1.455-.7644 2.1063-.2525l4.82 3.788 10.54-14.491c.4873-.6699 1.4255-.818 2.0954-.3307"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Checkmark2FilledIcon);
export default ForwardRef;
