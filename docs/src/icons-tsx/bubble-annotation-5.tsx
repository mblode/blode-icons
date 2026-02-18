import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleAnnotation5Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M21.5 12c0-5-3.6944-8-9.5-8s-9.5 3-9.5 8c0 1.2943.8942 3.4896 1.0366 3.8309.013.0311.0259.0596.0375.0913.0975.2658.489 1.66-1.0741 3.7217 2.1111 1 4.3531-.6439 4.3531-.6439 1.5511.8154 3.3968 1 5.1469 1 5.8056 0 9.5-3 9.5-8Z" /><path fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={0.75} d="M6.625 12a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm4.5 0a.875.875 0 1 0 1.7501-.0001A.875.875 0 0 0 11.125 12Zm4.5 0a.875.875 0 1 0 1.7501-.0001A.875.875 0 0 0 15.625 12Z" /></svg>;
const ForwardRef = forwardRef(BubbleAnnotation5Icon);
export default createLucideIcon('BubbleAnnotation5Icon', ForwardRef);
