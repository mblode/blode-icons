import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BackwardIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15.0018 10-2 2m0 0-2 2m2-2-2-2m2 2 2 2m-7.259-9h10.259c1.6568 0 3 1.3431 3 3v8c0 1.6569-1.3432 3-3 3H7.7428a3 3 0 0 1-2.6048-1.5116l-2.2857-4a3 3 0 0 1 0-2.9768l2.2857-4A3 3 0 0 1 7.7428 5" /></svg>;
const ForwardRef = forwardRef(BackwardIcon);
export default createLucideIcon('BackwardIcon', ForwardRef);
