import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Cloud2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 19c-2.7614 0-5-2.2386-5-5 0-2.5327 1.8832-4.6256 4.3257-4.955C7.1365 6.6913 9.3707 5 12 5c3.3137 0 6 2.6863 6 6 2.2091 0 4 1.7909 4 4s-1.7909 4-4 4z" /></svg>;
const ForwardRef = forwardRef(Cloud2Icon);
export default createLucideIcon('Cloud2Icon', ForwardRef);
