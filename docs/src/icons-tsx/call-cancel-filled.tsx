import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CallCancelFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20.7071 4.7071c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0l-8.5625 8.5625a12.04 12.04 0 0 1-1.1408-1.5508c-.1345-.2174-.1177-.5601.1489-.8267a2.825 2.825 0 0 0 .7083-2.8094l-.2984-.9944C9.6723 4.0869 8.2114 3 6.5544 3c-2.0156 0-3.8881 1.684-3.504 3.91.558 3.2339 2.029 6.1546 4.138 8.4873L3.293 19.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0zM16.8921 20.7517c-2.4962-.4307-4.8057-1.4054-6.8023-2.7976l3.661-3.661c.1854.0146.3962-.0522.5735-.2294a2.825 2.825 0 0 1 2.8093-.7083l.9945.2984c1.5872.4761 2.6741 1.9369 2.6741 3.594 0 2.0155-1.684 3.8881-3.9101 3.5039" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CallCancelFilledIcon);
export default createLucideIcon('CallCancelFilledIcon', ForwardRef);
