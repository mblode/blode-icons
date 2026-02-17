import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const StickerIcon = (
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
      d="M12 21c4.9706 0 9-4.0294 9-9 0-.6486-.3048-1.2499-.7635-1.7085l-6.528-6.528C13.2499 3.3048 12.6486 3 12 3c-4.9706 0-9 4.0294-9 9s4.0294 9 9 9"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M12.9621 3.5c-.158 4.1256 3.4117 7.6953 7.5373 7.5373M14.5 6 18 9.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(StickerIcon);
export default ForwardRef;
