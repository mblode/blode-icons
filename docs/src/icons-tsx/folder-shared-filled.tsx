import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const FolderSharedFilledIcon = (
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
      d="M2 7c0-2.2091 1.7909-4 4-4h2.9296a3 3 0 0 1 2.4962 1.3359l.8125 1.2188A1 1 0 0 0 13.0704 6H18c2.2091 0 4 1.7909 4 4v6c0 2.2091-1.7909 4-4 4h-5.126c0-.2497-.0312-.5009-.0947-.7478-.4319-1.6778-1.4693-3.1135-2.867-4.0577A4.73 4.73 0 0 0 10.75 12.5c0-2.6234-2.1266-4.75-4.75-4.75-1.6795 0-3.1554.8716-4 2.1872zM2 15.0628v.1919a7 7 0 0 1 .0877-.0602A5 5 0 0 1 2 15.0628"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M3.25 12.5c0-1.5188 1.2312-2.75 2.75-2.75s2.75 1.2312 2.75 2.75S7.5188 15.25 6 15.25s-2.75-1.2312-2.75-2.75M6 11.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5M6.0003 16c-1.7595 0-3.306.9096-4.1957 2.2795-.4162.6409-.344 1.3751.0244 1.9073.3489.5039.943.8132 1.5873.8132h5.168c.6442 0 1.2384-.3093 1.5872-.8132.3683-.5322.4407-1.2664.0244-1.9073C9.3062 16.9096 7.7598 16 6.0003 16m0 2c.8877 0 1.6859.385 2.2362 1H3.764c.5502-.615 1.3484-1 2.2362-1"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(FolderSharedFilledIcon);
export default ForwardRef;
