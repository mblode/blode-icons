import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShieldFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.3003 2.3891a4 4 0 0 0-2.6006 0L5.0247 4.34A3 3 0 0 0 3 7.1769v4.735c0 2.8068 1.149 4.8295 2.8125 6.4044 1.5724 1.4887 3.6323 2.5995 5.5556 3.6366l.1571.0847a1 1 0 0 0 .9496 0l.1571-.0847c1.9233-1.0371 3.9832-2.1479 5.5556-3.6366C19.8511 16.7414 21 14.7187 21 11.9119v-4.735a3 3 0 0 0-2.0248-2.837z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ShieldFilledIcon);
export default ForwardRef;
