import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const GumroadFilledIcon = (
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
      d="M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10m-15.5206-.2324c0 2.9226 1.723 5.2721 4.6524 5.2721 2.9293 0 3.6759-2.3495 3.8482-3.5529v3.3237h2.3794v-5.2721h-5.4235v1.0315h2.5847c-.2872 1.2607-.9765 2.5214-2.5847 2.5214-1.7806 0-2.9293-1.5472-2.9293-3.4383s1.1487-3.4383 2.9293-3.4383c1.6657 0 2.3549 1.2034 2.4124 2.0057h2.6995c-.0575-1.4326-1.3211-3.954-5.0545-3.954-3.6185 0-5.514 2.4641-5.514 5.5012"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(GumroadFilledIcon);
export default ForwardRef;
