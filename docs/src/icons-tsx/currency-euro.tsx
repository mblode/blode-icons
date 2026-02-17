import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CurrencyEuroIcon = (
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
      d="M3 10h10M3 14h10"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
      d="M19 6.2003C17.5447 4.2432 15.367 3 12.9333 3 8.5519 3 5 7.0294 5 12s3.5519 9 7.9333 9c2.4337 0 4.6114-1.2432 6.0667-3.2003"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyEuroIcon);
export default ForwardRef;
