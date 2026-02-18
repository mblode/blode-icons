import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HomePersonalFeedIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={11.5} r={2} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 20c0-2.2091-1.7909-4-4-4s-4 1.7909-4 4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10.5508v6.4491c0 1.6569 1.3445 3 3.0014 3h9.9972c1.6569 0 3.0014-1.3431 3.0014-3v-6.4491a3 3 0 0 0-1.2653-2.4476l-5-3.5437a3 3 0 0 0-3.4694 0l-5 3.5437A3 3 0 0 0 4 10.5508" /></svg>;
const ForwardRef = forwardRef(HomePersonalFeedIcon);
export default createLucideIcon('HomePersonalFeedIcon', ForwardRef);
