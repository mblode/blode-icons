import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Camera3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M3 7c0-1.6569 1.3431-3 3-3h12c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3z" /><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M15 12c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M17.5 7.5h.01m.24 0a.25.25 0 1 1-.5 0 .25.25 0 0 1 .5 0Z" /></svg>;
const ForwardRef = forwardRef(Camera3Icon);
export default ForwardRef;
