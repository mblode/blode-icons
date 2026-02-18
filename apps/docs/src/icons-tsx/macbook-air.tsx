import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MacbookAirIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M1 18.5a.5.5 0 0 1 .5-.5h7.264a1 1 0 0 1 .4472.1056l.5777.2888a1 1 0 0 0 .4472.1056h3.5278a1 1 0 0 0 .4472-.1056l.5778-.2888A1 1 0 0 1 15.2361 18H22.5a.5.5 0 0 1 .5.5v.5c0 .5523-.4477 1-1 1H2c-.5523 0-1-.4477-1-1z" /><path fill="currentColor" fillRule="evenodd" d="M2 7c0-1.6569 1.3432-3 3-3h14c1.6569 0 3 1.3431 3 3v8.5c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-.5523-.4477-1-1-1H5c-.5523 0-1 .4477-1 1v8.5c0 .5523-.4477 1-1 1s-1-.4477-1-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(MacbookAirIcon);
export default createLucideIcon('MacbookAirIcon', ForwardRef);
