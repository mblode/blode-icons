import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const CameraOff1FilledIcon = (
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
      d="M3.7071 2.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l2.4696 2.4696C3.162 6.6743 2 8.167 2 9.9313V17c0 2.2091 1.7909 4 4 4h12a4 4 0 0 0 1.3517-.2341l.9412.9412c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142zm10.2683 13.0967-4.865-4.865A3.484 3.484 0 0 0 8.5 12.5c0 1.933 1.567 3.5 3.5 3.5a3.484 3.484 0 0 0 1.9754-.6104"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      d="m8.3463 4.104 13.5932 13.5932A4.04 4.04 0 0 0 22 17V9.9312C22 7.7601 20.2399 6 18.0688 6a1.931 1.931 0 0 1-1.6069-.86l-.2393-.3588A4 4 0 0 0 12.8944 3h-1.7888a4 4 0 0 0-2.7593 1.104"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(CameraOff1FilledIcon);
export default ForwardRef;
