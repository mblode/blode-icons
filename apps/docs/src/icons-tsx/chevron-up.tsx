import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronUpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 14.5 6-6 6 6" /></svg>;
const ForwardRef = forwardRef(ChevronUpIcon);
export default createLucideIcon('ChevronUpIcon', ForwardRef);
