import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Sparkle2FilledIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    height={24}
    ref={ref}
    viewBox="0 0 25 24"
    width={25}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.7078 2.7127a1 1 0 0 0-1.9156 0c-.7194 2.3978-1.6518 4.1077-2.9368 5.3927s-2.995 2.2174-5.3927 2.9368a1 1 0 0 0 0 1.9156c2.3978.7194 4.1077 1.6518 5.3927 2.9368s2.2174 2.9949 2.9368 5.3927a1 1 0 0 0 1.9156 0c.7194-2.3978 1.6518-4.1077 2.9368-5.3927s2.9949-2.2174 5.3927-2.9368a1 1 0 0 0 0-1.9156c-2.3978-.7194-4.1077-1.6518-5.3927-2.9368s-2.2174-2.995-2.9368-5.3927"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(Sparkle2FilledIcon);
export default ForwardRef;
