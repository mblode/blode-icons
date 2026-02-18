import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BooleanGroupIntersect2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9v4c0 1.1046.8954 2 2 2h4M14 3h2m5 5v2m-2-7c1.1046 0 2 .8954 2 2m0 8c0 1.1046-.8954 2-2 2M9 5c0-1.1046.8954-2 2-2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 14v2m6-7h4c1.1046 0 2 .8954 2 2v4m-5 6H8m-3 0c-1.1046 0-2-.8954-2-2m12 0c0 1.1046-.8954 2-2 2M3 11c0-1.1046.8954-2 2-2" /></svg>;
const ForwardRef = forwardRef(BooleanGroupIntersect2Icon);
export default createLucideIcon('BooleanGroupIntersect2Icon', ForwardRef);
