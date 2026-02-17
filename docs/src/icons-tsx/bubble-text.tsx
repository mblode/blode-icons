import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleTextIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.9998 9h-6m6 4h-6m2.9979 7.5358 2.74-2.2701a1 1 0 0 1 .638-.2299h1.6263c1.6568 0 3-1.3432 3-3V7c0-1.6569-1.3432-3-3.0001-3h-10c-1.6568 0-3 1.3432-3 3v8.0358c0 1.6568 1.3432 3 3 3h1.6497c.2349 0 .4623.0827.6424.2336z" /></svg>;
const ForwardRef = forwardRef(BubbleTextIcon);
export default ForwardRef;
