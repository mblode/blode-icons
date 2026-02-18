import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DashboardLowFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10a10 10 0 0 1-.4578 3H12.618L9.8944 9.5528c-.247-.494-.8476-.6942-1.3416-.4472s-.6942.8476-.4472 1.3416L10.382 15H2.4578A10 10 0 0 1 2 12M3.3378 17c1.729 2.989 4.9608 5 8.6622 5s6.9331-2.011 8.6622-5z" /></svg>;
const ForwardRef = forwardRef(DashboardLowFilledIcon);
export default createLucideIcon('DashboardLowFilledIcon', ForwardRef);
