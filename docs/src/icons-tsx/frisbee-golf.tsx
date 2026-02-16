import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FrisbeeGolfIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.5006 16c-2.2387-2.6714-3.054-6.118-2.8274-9.5727C2.7665 5.004 4.0253 4 5.4516 4h7.1209c1.4159 0 2.663.9898 2.7766 2.401.1797 2.2307-.0202 4.636-.8486 6.601M3 16h4" /><ellipse cx={14} cy={16.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} rx={7} ry={3.5} /><ellipse cx={14} cy={15} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} rx={4.5} ry={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.9996 4c-.6123 3.2562-.3984 7.0846 1.2054 10m2.7946-10c.5851 3.1117.4157 6.746-1 9.6067" /></svg>;
const ForwardRef = forwardRef(FrisbeeGolfIcon);
export default ForwardRef;
