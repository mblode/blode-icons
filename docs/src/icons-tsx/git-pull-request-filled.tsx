import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GitPullRequestFilledIcon = (
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
      d="M15.2071 2.2929c.3905.3905.3905 1.0237 0 1.4142l-.7929.7929H14.5c2.2091 0 4 1.7909 4 4v6.6449c1.4457.4303 2.5 1.7696 2.5 3.3551 0 1.933-1.567 3.5-3.5 3.5S14 20.433 14 18.5c0-1.5855 1.0543-2.9248 2.5-3.3551V8.5c0-1.1046-.8954-2-2-2h-.0858l.7929.7929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-2.5-2.5c-.3905-.3905-.3905-1.0237 0-1.4142l2.5-2.5c.3905-.3905 1.0237-.3905 1.4142 0M3 5.5C3 3.567 4.567 2 6.5 2S10 3.567 10 5.5c0 1.5855-1.0543 2.9248-2.5 3.355v6.2899c1.4457.4303 2.5 1.7696 2.5 3.3551 0 1.933-1.567 3.5-3.5 3.5S3 20.433 3 18.5c0-1.5855 1.0543-2.9248 2.5-3.3551V8.8551C4.0543 8.4248 3 7.0855 3 5.5"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GitPullRequestFilledIcon);
export default ForwardRef;
