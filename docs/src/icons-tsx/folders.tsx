import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FoldersIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 16h1c1.6569 0 3-1.3431 3-3V9c0-1.6569-1.3431-3-3-3h-4.1716a2 2 0 0 1-1.4142-.5858l-.8284-.8284A2 2 0 0 0 11.1716 4H9C7.3431 4 6 5.3431 6 7M2 17v-6c0-1.6569 1.3432-3 3-3h2.1716a2 2 0 0 1 1.4142.5858l.8284.8284A2 2 0 0 0 10.8284 10H15c1.6569 0 3 1.3431 3 3v4c0 1.6569-1.3431 3-3 3H5c-1.6568 0-3-1.3431-3-3" /></svg>;
const ForwardRef = forwardRef(FoldersIcon);
export default ForwardRef;
