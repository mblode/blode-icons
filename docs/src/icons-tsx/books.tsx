import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BooksIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M7 19V7c0-.5523-.4477-1-1-1H4c-.5523 0-1 .4477-1 1v12c0 .5523.4477 1 1 1h2c.5523 0 1-.4477 1-1Zm0 0V5c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1v14c0 .5523-.4477 1-1 1H8c-.5523 0-1-.4477-1-1ZM7 8h6m-6 8h6m2.3518-8.8275 1.9318-.5177c.5335-.143 1.0818.1737 1.2248.7071l2.9117 10.8667c.1429.5335-.1736 1.0818-.7071 1.2247l-1.9319.5177c-.5334.1429-1.0818-.1737-1.2247-.7071L14.6447 8.3972c-.143-.5335.1736-1.0818.7071-1.2247Z" /></svg>;
const ForwardRef = forwardRef(BooksIcon);
export default createLucideIcon('BooksIcon', ForwardRef);
