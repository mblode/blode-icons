import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DrillingRigIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="m9 11 8 10m-2-10L7 21" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.6785 12.6078A2 2 0 0 1 10.6396 11h2.7208a2 2 0 0 1 1.9612 1.6078L17 21H7zM13.5 6.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5C10.5 5 11.5 3 12 3s1.5 2 1.5 3.5M19 21H5" /></svg>;
const ForwardRef = forwardRef(DrillingRigIcon);
export default ForwardRef;
