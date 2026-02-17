import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SocialFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 3C4.3431 3 3 4.3431 3 6c0 1.411.974 2.5944 2.2864 2.9146l.231 2.3089C3.4797 11.8553 2 13.7548 2 16c0 2.7614 2.2386 5 5 5 2.261 0 4.1715-1.5007 4.7897-3.5604l3.3022.3002C15.4214 19.0389 16.5984 20 18 20c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3c-1.21 0-2.2526.7163-2.727 1.748l-3.3032-.3003a4.97 4.97 0 0 0-.6716-2.0037l5.2811-4.801C17.0022 8.8707 17.486 9 18 9c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3c0 .4125.0832.8055.2338 1.1632l-5.2813 4.8012a4.974 4.974 0 0 0-2.445-.939l-.231-2.3097C8.295 8.236 9 7.2004 9 6c0-1.6569-1.3431-3-3-3" /></svg>;
const ForwardRef = forwardRef(SocialFilledIcon);
export default createLucideIcon('SocialFilledIcon', ForwardRef);
