import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const UnblurIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9z" /><path fill="currentColor" d="M9.5 6.25c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M6 6.25c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M9.5 17.75c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M9.25 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M3 10a.75.75 0 1 1-1.5 0A.75.75 0 0 1 3 10M3 14a.75.75 0 1 1-1.5 0A.75.75 0 0 1 3 14M9.25 20.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M10 10c0 .8284-.6716 1.5-1.5 1.5S7 10.8284 7 10s.6716-1.5 1.5-1.5S10 9.1716 10 10M10 14c0 .8284-.6716 1.5-1.5 1.5S7 14.8284 7 14s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5M6 10c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M6 14c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M6 17.75c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1" /></svg>;
const ForwardRef = forwardRef(UnblurIcon);
export default createLucideIcon('UnblurIcon', ForwardRef);
