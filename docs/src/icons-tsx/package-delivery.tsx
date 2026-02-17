import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PackageDeliveryIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 14V7c0-1.6569-1.3431-3-3-3m3 10c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3 3-1.3431 3-3m-3-3c1.6569 0 3 1.3431 3 3m0 0h10m-4.5-9V5m0 0H14c-1.6569 0-3 1.3431-3 3v2c0 1.6569 1.3431 3 3 3h3c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3z" /></svg>;
const ForwardRef = forwardRef(PackageDeliveryIcon);
export default createLucideIcon('PackageDeliveryIcon', ForwardRef);
