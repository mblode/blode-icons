import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const LightbulbGlowIcon = (
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
      d="m2.4901 13.0894-.951.309m20.9232-6.7983-.9511.309m-19.021-.0005-.9511-.309m20.9232 6.7984-.9511-.309"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
    <path
      d="M12 3c-3.866 0-7 3.134-7 7 0 2.5463 1.3596 4.7751 3.3924 6 .361.2175.6076.5949.6076 1.0163V19c0 1.6569 1.3431 3 3 3s3-1.3431 3-3v-1.9837c0-.4214.2466-.7988.6076-1.0163C17.6404 14.7751 19 12.5463 19 10c0-3.866-3.134-7-7-7Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M15 18H9"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(LightbulbGlowIcon);
export default ForwardRef;
