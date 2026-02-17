import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const ChairModernFilledIcon = (
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
      d="M6.4944 5.1135C6.9083 3.2924 8.5274 2 10.3949 2h3.2107c1.8675 0 3.4866 1.2924 3.9005 3.1135l1.8231 8.0217q.2125-.0513.4285-.1053c.5358-.134 1.0787.1918 1.2127.7276s-.1918 1.0787-.7276 1.2126c-1.0447.2612-2.0321.4781-2.9815.6507l1.6876 5.063c.1747.5239-.1085 1.0902-.6324 1.2649-.524.1746-1.0903-.1085-1.2649-.6325l-1.797-5.3907c-2.2172.266-4.2915.266-6.5088 0L6.949 21.3162c-.1746.524-.741.8071-1.2649.6325-.524-.1747-.807-.741-.6325-1.2649l1.6877-5.063c-.9495-.1726-1.9368-.3895-2.9815-.6507-.5358-.1339-.8615-.6768-.7276-1.2126s.6769-.8616 1.2127-.7276q.216.054.4285.1053z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(ChairModernFilledIcon);
export default ForwardRef;
