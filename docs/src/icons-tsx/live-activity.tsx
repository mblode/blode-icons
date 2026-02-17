import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LiveActivityIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 3.0547c4.5.4974 8 4.3125 8 8.9451 0 4.9705-4.0294 9-9 9s-9-4.0295-9-9c0-3.1205 1.588-5.87 4-7.4845m6 2.0752c2.5601.4702 4.5 2.7132 4.5 5.4093 0 3.0375-2.4624 5.5-5.5 5.5s-5.5-2.4625-5.5-5.5c0-.7056.1329-1.3802.375-2m6.125.2675c.5978.3458 1 .9922 1 1.7325 0 1.1045-.8954 2-2 2-.7403 0-1.3866-.4022-1.7324-1" /></svg>;
const ForwardRef = forwardRef(LiveActivityIcon);
export default createLucideIcon('LiveActivityIcon', ForwardRef);
