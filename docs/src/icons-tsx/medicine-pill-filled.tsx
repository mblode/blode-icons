import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MedicinePillFilledIcon = (
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
      d="M17.4789 3.6312c-2.175-2.175-5.7014-2.175-7.8764 0l-2.2819 2.282 2.9739 2.9738c1.4404-1.1368 3.2593-1.8152 5.2366-1.8152 1.2762 0 2.4863.2826 3.5713.7886.0793-1.5205-.4617-3.0673-1.6235-4.2292M8.887 10.2945 5.9132 7.3206l-2.282 2.282c-2.175 2.1749-2.175 5.7013 0 7.8763 1.162 1.1618 2.7087 1.7028 4.2292 1.6235-.506-1.085-.7886-2.2951-.7886-3.5713 0-1.9773.6784-3.7962 1.8152-5.2366M13.3013 9.4568c-2.474.9085-4.239 3.2853-4.239 6.0743C9.0622 19.1038 11.9583 22 15.531 22q.1395 0 .2777-.0059zM17.7609 21.6054C20.2349 20.697 22 18.3202 22 15.5311c0-3.5727-2.8962-6.4689-6.4689-6.4689q-.1395 0-.2777.0059z"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(MedicinePillFilledIcon);
export default ForwardRef;
