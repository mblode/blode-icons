import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const H1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5v7m0 7v-7m10-7v7m0 7v-7m0 0H3m15 1.5 3-2.5v8" /></svg>;
const ForwardRef = forwardRef(H1Icon);
export default createLucideIcon('H1Icon', ForwardRef);
