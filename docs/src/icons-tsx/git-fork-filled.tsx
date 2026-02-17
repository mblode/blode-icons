import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GitForkFilledIcon = (
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
      d="M3.5 5.5C3.5 3.567 5.067 2 7 2s3.5 1.567 3.5 3.5c0 1.5855-1.0543 2.9248-2.5 3.355V9.5c0 .8284.6716 1.5 1.5 1.5.9793 0 1.8647.4022 2.5 1.0505C12.6353 11.4022 13.5207 11 14.5 11c.8284 0 1.5-.6716 1.5-1.5v-.645c-1.4457-.4302-2.5-1.7695-2.5-3.355C13.5 3.567 15.067 2 17 2s3.5 1.567 3.5 3.5c0 1.5855-1.0543 2.9248-2.5 3.355V9.5c0 1.933-1.567 3.5-3.5 3.5-.8284 0-1.5.6716-1.5 1.5v.6449c1.4457.4303 2.5 1.7696 2.5 3.3551 0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5c0-1.5855 1.0543-2.9248 2.5-3.3551V14.5c0-.8284-.6716-1.5-1.5-1.5C7.567 13 6 11.433 6 9.5v-.645C4.5543 8.4249 3.5 7.0856 3.5 5.5"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GitForkFilledIcon);
export default ForwardRef;
