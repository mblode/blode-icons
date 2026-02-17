import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VersusCircleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16.8984 10c0-.5523-.4477-1-1-1h-1.5c-.5522 0-1 .4477-1 1v1c0 .5523.4478 1 1 1h1.5c.5523 0 1 .4477 1 1v1c0 .5523-.4477 1-1 1h-1.5c-.5522 0-1-.4477-1-1v0M11 9l-1.5 6h-1L7 9" /></svg>;
const ForwardRef = forwardRef(VersusCircleIcon);
export default ForwardRef;
