import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PluginIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7H8c-1.6569 0-3 1.3431-3 3v3c0 2.7614 2.2386 5 5 5h2M9 7V3m0 4h6m0 0h1c1.6569 0 3 1.3431 3 3v3c0 2.7614-2.2386 5-5 5h-2m3-11V3m-3 15v3" /></svg>;
const ForwardRef = forwardRef(PluginIcon);
export default ForwardRef;
