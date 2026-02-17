import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AdjustPhotoFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><g fill="currentColor" clipPath="url(#a)"><path d="M11.9999 2.2c.6075 0 1.1-.4925 1.1-1.1s-.4925-1.1-1.1-1.1-1.1.4925-1.1 1.1.4925 1.1 1.1 1.1M3.5148 3.5148c.4296-.4296 1.126-.4296 1.5556 0s.4296 1.126 0 1.5556-1.126.4296-1.5556 0-.4296-1.126 0-1.5556M2.2 12c0 .6075-.4925 1.1-1.1 1.1S0 12.6075 0 12s.4925-1.1 1.1-1.1 1.1.4925 1.1 1.1M24 12c0 .6075-.4925 1.1-1.1 1.1s-1.1-.4925-1.1-1.1.4925-1.1 1.1-1.1 1.1.4925 1.1 1.1M20.4853 18.9297c-.4295-.4295-1.126-.4295-1.5556 0s-.4296 1.1261 0 1.5557 1.1261.4295 1.5556 0 .4296-1.1261 0-1.5557M18.9297 3.5148c-.4295.4296-.4295 1.126 0 1.5556s1.1261.4296 1.5557 0 .4295-1.126 0-1.5556-1.1261-.4296-1.5557 0M3.5148 20.4853c-.4296-.4295-.4296-1.126 0-1.5556s1.126-.4296 1.5556 0 .4296 1.1261 0 1.5556-1.126.4296-1.5556 0M12 4c-4.4183 0-8 3.5817-8 8 0 1.8534.6303 3.5596 1.6881 4.9159q.0466-.0647.1048-.123l5.5-5.5c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142l-5.5 5.5a1 1 0 0 1-.123.1048C8.4404 19.3697 10.1466 20 12 20c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" style={{
        fill: "#fff",
        fillOpacity: 1
      }} /></clipPath></defs></svg>;
const ForwardRef = forwardRef(AdjustPhotoFilledIcon);
export default createLucideIcon('AdjustPhotoFilledIcon', ForwardRef);
