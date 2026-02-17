import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const UnpinFilledIcon = (
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
      d="m16.843 18.257 3.4499 3.4499c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4143l-18-18c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4143l3.4499 3.4498c-2.6126.9592-3.5544 4.4456-1.4208 6.5793l2.2638 2.2638-3.293 3.2928c-.3904.3906-.3904 1.0237 0 1.4143.3906.3905 1.0238.3905 1.4143 0L8 17.414l2.2638 2.2637c2.1336 2.1337 5.6201 1.1918 6.5792-1.4207M18.3935 12.6159a2 2 0 0 0-.8233.8327l-7.0191-7.019a2 2 0 0 0 .8327-.8234l.8241-1.5304c1.2703-2.3592 4.4557-2.8267 6.3503-.932l2.2978 2.2977c1.8946 1.8947 1.4271 5.08-.932 6.3503z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(UnpinFilledIcon);
export default ForwardRef;
