import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ReviewFilledIcon = (
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
      d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm9.6925.915c-.2562-.616-1.1288-.616-1.385 0l-.6525 1.5687a.75.75 0 0 1-.6325.4596l-1.6936.1358c-.665.0533-.9347.8831-.428 1.3171l1.2903 1.1054a.75.75 0 0 1 .2416.7436l-.3942 1.6526c-.1548.649.5512 1.1619 1.1205.8141l1.45-.8856a.75.75 0 0 1 .7818 0l1.45.8856c.5693.3478 1.2753-.1651 1.1205-.8141l-.3943-1.6526a.75.75 0 0 1 .2417-.7436l1.2903-1.1054c.5067-.434.237-1.2638-.428-1.3171l-1.6936-.1358a.75.75 0 0 1-.6325-.4596z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ReviewFilledIcon);
export default ForwardRef;
