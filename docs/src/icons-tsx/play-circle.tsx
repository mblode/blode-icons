import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const PlayCircleIcon = (
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
      d="M10 14.8039V9.1961c0-.4017.4498-.6394.7817-.4131l4.1124 2.8039c.2911.1985.2911.6277 0 .8262l-4.1124 2.8039c-.3319.2263-.7817-.0114-.7817-.4131"
      fill="currentColor"
    />
    <path
      clipRule="evenodd"
      d="M12 4c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8-3.5817-8-8-8M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
const ForwardRef = forwardRef(PlayCircleIcon);
export default ForwardRef;
