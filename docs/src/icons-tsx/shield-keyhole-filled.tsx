import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShieldKeyholeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.6997 2.3891a4 4 0 0 1 2.6006 0L18.9752 4.34A3 3 0 0 1 21 7.1769v4.735c0 2.8068-1.1489 4.8295-2.8125 6.4044-1.5724 1.4887-3.6323 2.5995-5.5556 3.6366l-.1571.0847a1 1 0 0 1-.9496 0l-.1571-.0847c-1.9233-1.0371-3.9832-2.1479-5.5556-3.6366C4.1489 16.7414 3 14.7187 3 11.9119v-4.735A3 3 0 0 1 5.0248 4.34zM12 8c-1.3807 0-2.5 1.1193-2.5 2.5 0 1.0252.617 1.9062 1.5 2.292V15c0 .5523.4477 1 1 1s1-.4477 1-1v-2.208c.883-.3858 1.5-1.2668 1.5-2.292C14.5 9.1193 13.3807 8 12 8" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ShieldKeyholeFilledIcon);
export default createLucideIcon('ShieldKeyholeFilledIcon', ForwardRef);
