import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageAddFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 2C5.7909 2 4 3.7909 4 6v12c0 2.2091 1.7909 4 4 4h7.1707A3 3 0 0 1 15 21c-1.6569 0-3-1.3431-3-3s1.3431-3 3-3c0-1.6569 1.3431-3 3-3a2.99 2.99 0 0 1 2 .7639V6c0-2.2091-1.7909-4-4-4z" /><path fill="currentColor" d="M19 15c0-.5523-.4477-1-1-1s-1 .4477-1 1v2h-2c-.5523 0-1 .4477-1 1s.4477 1 1 1h2v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2z" /></svg>;
const ForwardRef = forwardRef(PageAddFilledIcon);
export default createLucideIcon('PageAddFilledIcon', ForwardRef);
