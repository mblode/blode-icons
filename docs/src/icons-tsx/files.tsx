import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FilesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 18c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3V9c0-1.6569 1.3431-3 3-3m9 12h-6c-1.6569 0-3-1.3431-3-3V6m9 12c1.6569 0 3-1.3431 3-3V8M8 6c0-1.6569 1.3431-3 3-3h4m0 0 5 5m-5-5v3c0 1.1046.8954 2 2 2h3" /></svg>;
const ForwardRef = forwardRef(FilesIcon);
export default ForwardRef;
