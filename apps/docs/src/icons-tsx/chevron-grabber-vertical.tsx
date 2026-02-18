import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronGrabberVerticalIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 9 3.1161-3.116c.4882-.4882 1.2796-.4882 1.7678 0L16 9m-8 6.0001 3.1161 3.1161c.4882.4881 1.2796.4881 1.7678 0L16 15.0001" /></svg>;
const ForwardRef = forwardRef(ChevronGrabberVerticalIcon);
export default createLucideIcon('ChevronGrabberVerticalIcon', ForwardRef);
