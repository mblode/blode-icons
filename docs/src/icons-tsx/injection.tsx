import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const InjectionIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m18 3 3 3M19.5 4.5 17 7M13 4l7 7M14.5003 5.5l-7 7c-1.1046 1.1046-1.1046 2.8954 0 4s2.8954 1.1046 4 0l7-7M3 21l4.5-4.5" /></svg>;
const ForwardRef = forwardRef(InjectionIcon);
export default ForwardRef;
