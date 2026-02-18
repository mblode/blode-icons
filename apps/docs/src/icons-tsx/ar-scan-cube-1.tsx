import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArScanCube1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 20H7c-1.6569 0-3-1.3431-3-3v-1m12 4h1c1.6569 0 3-1.3431 3-3v-1M4 8V7c0-1.6569 1.3431-3 3-3h1m8 0h1c1.6569 0 3 1.3431 3 3v1m-5 2.2858-3 1.7143m0 0-3-1.7143m3 1.7143V15.5m-.9923-6.933-1.5.8572A2 2 0 0 0 8.5 11.1606v1.6788c0 .7177.3846 1.3804 1.0077 1.7364l1.5.8572a2 2 0 0 0 1.9846 0l1.5-.8572A2 2 0 0 0 15.5 12.8394v-1.6788a2 2 0 0 0-1.0077-1.7364l-1.5-.8572a2 2 0 0 0-1.9846 0" /></svg>;
const ForwardRef = forwardRef(ArScanCube1Icon);
export default createLucideIcon('ArScanCube1Icon', ForwardRef);
