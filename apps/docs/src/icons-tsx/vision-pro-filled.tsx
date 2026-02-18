import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VisionProFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M12 5c-2.494 0-5.4152.1176-7.7321 1.0034-1.1759.4496-2.2556 1.1183-3.0404 2.1233C.4326 9.1445 0 10.431 0 12c0 1.6479.4092 3.3707 1.3768 4.7105C2.3723 18.0888 3.9204 19 6 19c1.029 0 1.847-.2232 2.5304-.585.6687-.354 1.1613-.8174 1.5517-1.2079l.1395-.1398C10.9548 16.3316 11.2853 16 12 16s1.0452.3316 1.7784 1.0673l.1395.1398c.3904.3905.883.8539 1.5517 1.2079.6833.3618 1.5015.585 2.5304.585 2.0875 0 3.6339-.9341 4.6252-2.3164C23.5894 15.3389 24 13.6189 24 12c0-1.5689-.4326-2.8555-1.2275-3.8733-.7848-1.005-1.8645-1.6737-3.0404-2.1232C17.4153 5.1175 14.494 5 12 5" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" style={{
        fill: "#fff",
        fillOpacity: 1
      }} /></clipPath></defs></svg>;
const ForwardRef = forwardRef(VisionProFilledIcon);
export default createLucideIcon('VisionProFilledIcon', ForwardRef);
