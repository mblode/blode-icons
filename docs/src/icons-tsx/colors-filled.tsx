import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ColorsFilledIcon = (
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
      d="M11.9996 2C9.1224 2 6.7899 4.3324 6.7899 7.2097c0 .7556.1603 1.4713.4479 2.117.653 1.4662 1.963 2.574 3.5527 2.9518a7 7 0 0 1 .4741-.7184c1.2844-1.7095 3.332-2.8182 5.6382-2.8182q.0389 0 .0776.0005a5.2 5.2 0 0 0 .2289-1.5327C17.2093 4.3325 14.8768 2 11.9996 2m1.1499 17.4033C14.0981 20.3887 15.429 21 16.9028 21c2.8773 0 5.2097-2.3325 5.2097-5.2097 0-2.6758-2.0181-4.8816-4.6148-5.1762a5.3 5.3 0 0 0-.5949-.0335c-1.4738 0-2.8047.6114-3.7533 1.5968.1437.2403.2735.49.3884.7479.3904.8766.6069 1.8467.6069 2.865 0 1.3196-.3634 2.5561-.9953 3.613m-1.0723-5.1457c.1487.4839.2289.9983.2289 1.5327 0 1.1741-.3873 2.2551-1.0415 3.1258C10.3126 20.1833 8.8 21 7.0964 21c-2.8772 0-5.2097-2.3325-5.2097-5.2097 0-2.4607 1.7067-4.5239 4.0005-5.0688 1.0898 1.893 3.0343 3.2332 5.3103 3.4913a7.1 7.1 0 0 0 .8797.0448"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ColorsFilledIcon);
export default ForwardRef;
