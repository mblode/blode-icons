import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Images1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17.5 9c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5 1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5" /><path fill="currentColor" fillRule="evenodd" d="M7 3h9.99c2.21 0 4 1.79 4 4v10c0 2.21-1.79 4-4 4H7c-2.21 0-4-1.79-4-4V7c0-2.21 1.79-4 4-4m10 2H7v.01c-1.1 0-2 .9-2 2v5.21l1.27-.95.02-.02c1.22-.82 2.86-.63 3.86.45 1.47 1.58 2.94 2.75 4.85 2.75 1.7 0 2.86-.56 4-1.62V7c0-1.1-.9-2-2-2" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Images1FilledIcon);
export default createLucideIcon('Images1FilledIcon', ForwardRef);
