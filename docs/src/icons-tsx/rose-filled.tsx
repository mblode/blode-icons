import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RoseFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.5385 2.3099a2.896 2.896 0 0 0-3.0769 0c-1.1565.7258-2.2031 1.6842-2.759 2.8214A10.95 10.95 0 0 1 12 6.7795a10.95 10.95 0 0 1 4.2974-1.6482c-.5559-1.1372-1.6024-2.0956-2.7589-2.8214M7.9746 7.377C5.8188 6.8944 4 8.791 4 11v1c0 4.0796 3.0537 7.446 7 7.9381V21c0 .5523.4477 1 1 1s1-.4477 1-1v-8c0-3.4936-2.2885-5.01-5.0254-5.623M15 19.4185c2.9318-1.1868 5-4.0611 5-7.4185v-1c0-2.2091-1.8191-4.173-3.984-3.7334-.8275.168-1.6379.442-2.43.8886C14.4811 9.5538 15 11.2163 15 13z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(RoseFilledIcon);
export default createLucideIcon('RoseFilledIcon', ForwardRef);
