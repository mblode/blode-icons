import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PassportIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 16h5m0-5.5c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5S10.6193 8 12 8s2.5 1.1193 2.5 2.5m-7 10h9c1.6569 0 3-1.3431 3-3v-11c0-1.6569-1.3431-3-3-3h-9c-1.6569 0-3 1.3431-3 3v11c0 1.6569 1.3431 3 3 3" /></svg>;
const ForwardRef = forwardRef(PassportIcon);
export default createLucideIcon('PassportIcon', ForwardRef);
