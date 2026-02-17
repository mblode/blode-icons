import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FilterTimelineIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.0016 5v14m0 0L3 16m3.0016 3L9 16m3-9h8m-4 10h4m-6-5h6" /></svg>;
const ForwardRef = forwardRef(FilterTimelineIcon);
export default createLucideIcon('FilterTimelineIcon', ForwardRef);
