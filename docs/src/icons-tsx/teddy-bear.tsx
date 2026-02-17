import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TeddyBearIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12c-.7254 1.1294-1.1044 2.3674-.975 4M15 12c.7254 1.1294 1.1044 2.3674.9749 4M9.5 19c1.7245.5732 3.2755.5732 5 0M9.5 18.5C9.5 19.8807 8.3807 21 7 21s-2.5-1.1193-2.5-2.5S5.6193 16 7 16s2.5 1.1193 2.5 2.5M19.5 18.5c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5S15.6193 16 17 16s2.5 1.1193 2.5 2.5M16 11l2.5349.9506a2.2578 2.2578 0 0 1 .8038 3.7107L19 16M8 11l-2.5349.9506a2.258 2.258 0 0 0-.8038 3.7107L5 16M12 3c-.7549 0-1.4707.1506-2.1124.4201A2.49 2.49 0 0 0 8.5 3C7.1193 3 6 4.1193 6 5.5c0 .818.3928 1.544 1 2.0002C7.0001 9.9854 9.2386 12 12 12s4.9999-2.0146 5-4.4998c.6072-.4561 1-1.1823 1-2.0002C18 4.1193 16.8807 3 15.5 3c-.5134 0-.9906.1547-1.3876.4201C13.4707 3.1506 12.7549 3 12 3" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path fill="currentColor" d="M10.9554 8.1098c-.3827.0779-.5758.4258-.3746.7128.2942.4197.7818.9274 1.4192.9274s1.125-.5077 1.4192-.9274c.2012-.287.0081-.635-.3746-.7128-.7198-.1464-1.3694-.1464-2.0892 0" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(TeddyBearIcon);
export default ForwardRef;
