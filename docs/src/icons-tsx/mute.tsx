import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const MuteIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.7071 4.7071c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L17 5.5858V5.135c0-1.6956-1.9777-2.622-3.2804-1.5364L9.9161 6.7682A1 1 0 0 1 9.2759 7H8c-1.6569 0-3 1.3431-3 3v4c0 .9778.4678 1.8463 1.1918 2.394l-2.899 2.8989c-.3904.3905-.3904 1.0237 0 1.4142.3906.3905 1.0238.3905 1.4143 0zM7.6491 14.9367 15 7.5857V5.135l-3.8035 3.1697A3 3 0 0 1 9.2759 9H8c-.5523 0-1 .4477-1 1v4c0 .4288.2699.7946.649.9367"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      d="m15 13.2429 2-2v7.6221c0 1.6956-1.9777 2.622-3.2804 1.5364l-3.2063-2.6719 1.4201-1.42L15 18.865z"
      fill="currentColor"
    />
  </svg>
);
const ForwardRef = forwardRef(MuteIcon);
export default ForwardRef;
