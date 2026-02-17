import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FolderAddLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10V7c0-1.6569 1.3431-3 3-3h2.9296c.6687 0 1.2932.3342 1.6641.8906l.8126 1.2188A2 2 0 0 0 13.0704 7H18c1.6569 0 3 1.3431 3 3v6c0 1.6569-1.3431 3-3 3h-6m-7-5v3m0 0v3m0-3H2m3 0h3" /></svg>;
const ForwardRef = forwardRef(FolderAddLeftIcon);
export default ForwardRef;
