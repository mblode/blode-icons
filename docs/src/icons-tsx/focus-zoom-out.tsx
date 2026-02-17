import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FocusZoomOutIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V7c0-1.6569 1.3431-3 3-3h1M4 16v1c0 1.6569 1.3431 3 3 3h1m8-16h1c1.6569 0 3 1.3431 3 3v1m0 8v1c0 1.6569-1.3431 3-3 3h-1M12 9v3m0 0v3m0-3H9m3 0h3" /></svg>;
const ForwardRef = forwardRef(FocusZoomOutIcon);
export default ForwardRef;
