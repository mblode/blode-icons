import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShieldCrossedFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.6997 2.3891a4 4 0 0 1 2.6006 0L18.9752 4.34A3 3 0 0 1 21 7.1769v4.735c0 2.8068-1.1489 4.8295-2.8125 6.4044-1.5724 1.4887-3.6323 2.5995-5.5556 3.6366l-.1571.0847a1 1 0 0 1-.9496 0l-.1571-.0847c-1.9233-1.0371-3.9832-2.1479-5.5556-3.6366C4.1489 16.7414 3 14.7187 3 11.9119v-4.735A3 3 0 0 1 5.0248 4.34zm2.5932 11.818c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L13.4142 11.5l1.2929-1.2929c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L12 10.0858l-1.2929-1.293c-.3905-.3904-1.0237-.3904-1.4142 0-.3905.3906-.3905 1.0238 0 1.4143L10.5858 11.5l-1.293 1.2929c-.3904.3905-.3904 1.0237 0 1.4142.3906.3905 1.0238.3905 1.4143 0L12 12.9142z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ShieldCrossedFilledIcon);
export default createLucideIcon('ShieldCrossedFilledIcon', ForwardRef);
