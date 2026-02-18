import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Filter1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M17.1716 4H6.8284C5.2664 4 4 5.2663 4 6.8284c0 .7502.298 1.4696.8284 2l4.293 4.2929A3 3 0 0 1 10 15.2426v4.8144c0 .6982.6974 1.1815 1.3511.9363l2-.75A1 1 0 0 0 14 19.307v-4.0644a3 3 0 0 1 .8787-2.1213l4.2929-4.2929a2.829 2.829 0 0 0 .8284-2C20 5.2664 18.7337 4 17.1716 4Z" /></svg>;
const ForwardRef = forwardRef(Filter1Icon);
export default createLucideIcon('Filter1Icon', ForwardRef);
