import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Group3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.0017 19h.9266c1.7399 0 3.2022-1.5432 2.4237-3.0992-1.1602-2.3185-3.3585-3.2472-5.3503-2.7861m-5-6.1147c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3432-3 3-3 3 1.3431 3 3m8.5.5c0 1.3807-1.1192 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5M10.7828 20H5.2207c-1.74 0-3.1846-1.5231-2.5141-3.1287 2.1556-5.1617 8.4347-5.1617 10.5903 0C13.9674 18.4769 12.5227 20 10.7828 20" /></svg>;
const ForwardRef = forwardRef(Group3Icon);
export default createLucideIcon('Group3Icon', ForwardRef);
