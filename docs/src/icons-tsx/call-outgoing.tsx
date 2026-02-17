import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CallOutgoingIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.9994 4h4v4m-5 1 4.5-4.5m-2.24 15.2663C10.6186 18.6203 5.3791 13.3808 4.2331 6.74 3.9746 5.242 5.2316 4 6.7516 4c1.2155 0 2.287.7972 2.6362 1.9614l.2984.9945a1.825 1.825 0 0 1-.4576 1.8149c-.5508.5508-.702 1.3976-.292 2.0599a13.07 13.07 0 0 0 4.2321 4.2322c.6623.4098 1.5091.2587 2.0599-.2921a1.825 1.825 0 0 1 1.8149-.4576l.9945.2984a2.752 2.752 0 0 1 1.9614 2.6362c0 1.52-1.2421 2.777-2.74 2.5185" /></svg>;
const ForwardRef = forwardRef(CallOutgoingIcon);
export default ForwardRef;
