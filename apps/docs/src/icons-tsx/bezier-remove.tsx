import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BezierRemoveIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 6v.5c0 .8284.6716 1.5 1.5 1.5h.5m-2-2v-.5c0-.8284.6716-1.5 1.5-1.5h1c.8284 0 1.5.6716 1.5 1.5v1c0 .8284-.6716 1.5-1.5 1.5H18m-2-2H8M6 8v8m2 2h8m2-2V8m-4 4h-4m10 6.5v-1c0-.8284-.6716-1.5-1.5-1.5h-1c-.8284 0-1.5.6716-1.5 1.5v1c0 .8284.6716 1.5 1.5 1.5h1c.8284 0 1.5-.6716 1.5-1.5M5.5 20h1c.8284 0 1.5-.6716 1.5-1.5v-1c0-.8284-.6716-1.5-1.5-1.5h-1c-.8284 0-1.5.6716-1.5 1.5v1c0 .8284.6716 1.5 1.5 1.5m0-12h1C7.3284 8 8 7.3284 8 6.5v-1C8 4.6716 7.3284 4 6.5 4h-1C4.6716 4 4 4.6716 4 5.5v1C4 7.3284 4.6716 8 5.5 8" /></svg>;
const ForwardRef = forwardRef(BezierRemoveIcon);
export default createLucideIcon('BezierRemoveIcon', ForwardRef);
