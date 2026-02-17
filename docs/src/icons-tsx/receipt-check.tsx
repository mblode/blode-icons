import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ReceiptCheckIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14h4m-3.75-5.05L11.3 10l2.45-2.45M5 6v13.3884c0 .3839.4147.6246.748.4341l2.2873-1.307a1 1 0 0 1 .9434-.0262l2.5741 1.2871a1 1 0 0 0 .8944 0l2.5741-1.2871a1 1 0 0 1 .9434.0262l2.2872 1.307c.3334.1905.7481-.0502.7481-.4341V6c0-1.6569-1.3431-3-3-3H8C6.3431 3 5 4.3431 5 6" /></svg>;
const ForwardRef = forwardRef(ReceiptCheckIcon);
export default ForwardRef;
