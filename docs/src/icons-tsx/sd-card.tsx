import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SdCardIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7v2m4-2v2M8 3h6c1.6569 0 3 1.3431 3 3v1.0917c0 .5922.1753 1.1713.5038 1.664l.9924 1.4885A3 3 0 0 1 19 11.9083V18c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3V6c0-1.6569 1.3431-3 3-3" /></svg>;
const ForwardRef = forwardRef(SdCardIcon);
export default ForwardRef;
