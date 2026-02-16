import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SubscriptIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 20h-4c0-1.8841 4-3.202 4-5.0691C21 13.7674 20.1098 13 19.0052 13c-.9669 0-1.6251.5837-1.8809 1.3478M3 6l10 12m0-12L3 18" /></svg>;
const ForwardRef = forwardRef(SubscriptIcon);
export default ForwardRef;
