import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GitBranchesFilledIcon = (
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
      d="M7.5 2C5.567 2 4 3.567 4 5.5c0 1.5855 1.0543 2.9248 2.5 3.355v6.2899C5.0543 15.5752 4 16.9145 4 18.5 4 20.433 5.567 22 7.5 22s3.5-1.567 3.5-3.5c0-1.5855-1.0543-2.9248-2.5-3.3551V15c0-1.1046.8954-2 2-2h3c2.2091 0 4-1.7909 4-4v-.145C18.9457 8.4249 20 7.0856 20 5.5 20 3.567 18.433 2 16.5 2S13 3.567 13 5.5c0 1.5855 1.0543 2.9248 2.5 3.355V9c0 1.1046-.8954 2-2 2h-3a3.98 3.98 0 0 0-2 .5351v-2.68C9.9457 8.4248 11 7.0855 11 5.5 11 3.567 9.433 2 7.5 2"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GitBranchesFilledIcon);
export default ForwardRef;
