import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Expand45Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6v6m-6 0 5.25-5.25M10 14l-5.25 5.25M4 14v6h6" /></svg>;
const ForwardRef = forwardRef(Expand45Icon);
export default createLucideIcon('Expand45Icon', ForwardRef);
