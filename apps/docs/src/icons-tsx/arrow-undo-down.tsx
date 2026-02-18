import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowUndoDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6.4998 19-2.9394-2.9393c-.5857-.5858-.5857-1.5356 0-2.1214L6.4998 11m-2.5 4h12.5c2.4853 0 4.5-2.0147 4.5-4.5s-2.0147-4.5-4.5-4.5h-4.5" /></svg>;
const ForwardRef = forwardRef(ArrowUndoDownIcon);
export default createLucideIcon('ArrowUndoDownIcon', ForwardRef);
