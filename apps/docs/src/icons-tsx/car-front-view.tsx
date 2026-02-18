import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CarFrontViewIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18v-6.0917c0-.5922.1753-1.1713.5038-1.6641l2.6056-3.9083A3 3 0 0 1 8.6055 5h6.7889a3 3 0 0 1 2.4962 1.3359l2.6056 3.9083A3 3 0 0 1 21 11.9083V18c0 .5523-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1v-1H7v1c0 .5523-.4477 1-1 1H4c-.5523 0-1-.4477-1-1M2 10h1.5M20.5 10H22M6 13h1M17 13h1" /></svg>;
const ForwardRef = forwardRef(CarFrontViewIcon);
export default createLucideIcon('CarFrontViewIcon', ForwardRef);
