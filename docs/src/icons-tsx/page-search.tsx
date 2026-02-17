import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageSearchIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 21H8c-1.6569 0-3-1.3431-3-3V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v4m0 9.9495c.6186-.6313 1-1.4958 1-2.4495 0-1.933-1.567-3.5-3.5-3.5S13 15.567 13 17.5s1.567 3.5 3.5 3.5c.9793 0 1.8647-.4022 2.5-1.0505m0 0L20.5 21.5" /></svg>;
const ForwardRef = forwardRef(PageSearchIcon);
export default ForwardRef;
