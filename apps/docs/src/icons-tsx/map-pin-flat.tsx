import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MapPinFlatIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 7H7M3 17.5v-11C3 5.1193 4.1193 4 5.5 4H7v11H5.5C4.1193 15 3 16.1193 3 17.5m0 0C3 18.8807 4.1193 20 5.5 20H17c1.6569 0 3-1.3431 3-3v-3m0-7c0 2.5-3 4-3 4s-3-1.5-3-4c0-1.6569 1.3431-3 3-3s3 1.3431 3 3" /></svg>;
const ForwardRef = forwardRef(MapPinFlatIcon);
export default createLucideIcon('MapPinFlatIcon', ForwardRef);
