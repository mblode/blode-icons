import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FilterDescIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h14M4 12h7M4 18h5M18 11v6m-3-1 3 3 3-3" /></svg>;
const ForwardRef = forwardRef(FilterDescIcon);
export default ForwardRef;
