import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Bubble5Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M21.5 12c0-5-3.6944-8-9.5-8s-9.5 3-9.5 8c0 1.2943.8942 3.4896 1.0366 3.8309.013.0311.0259.0596.0375.0913.0975.2658.489 1.66-1.0741 3.7217 2.1111 1 4.3531-.6439 4.3531-.6439 1.5511.8154 3.3968 1 5.1469 1 5.8056 0 9.5-3 9.5-8Z" /></svg>;
const ForwardRef = forwardRef(Bubble5Icon);
export default createLucideIcon('Bubble5Icon', ForwardRef);
