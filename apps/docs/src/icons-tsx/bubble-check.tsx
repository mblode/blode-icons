import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleCheckIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9.7498 11.25 1.5 1.5 3.5-3.5m-2.7521 11.2858 2.74-2.2701a1 1 0 0 1 .638-.2299h1.6263c1.6568 0 3-1.3432 3-3V7c0-1.6569-1.3432-3-3.0001-3h-10c-1.6568 0-3 1.3432-3 3v8.0358c0 1.6568 1.3432 3 3 3h1.6497c.2349 0 .4623.0827.6424.2336z" /></svg>;
const ForwardRef = forwardRef(BubbleCheckIcon);
export default createLucideIcon('BubbleCheckIcon', ForwardRef);
