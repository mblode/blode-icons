import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car7Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M19.5 17h.5c1.1046 0 2-.8954 2-2v-2.6577c0-1.3766-.9369-2.5765-2.2724-2.9104l-1.0387-.2597a2 2 0 0 1-1.1149-.7403L15.9 6.2A3 3 0 0 0 13.5 5H10c-.5523 0-1 .4477-1 1v4H4c-1.1046 0-2 .8954-2 2v3c0 1.1046.8954 2 2 2h.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.5 17h5" /><circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /></svg>;
const ForwardRef = forwardRef(Car7Icon);
export default ForwardRef;
