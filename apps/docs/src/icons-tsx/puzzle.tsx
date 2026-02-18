import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PuzzleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M7 5h2.5v-.5C9.5 3.1193 10.6193 2 12 2s2.5 1.1193 2.5 2.5V5H17c1.6569 0 3 1.3431 3 3v1.5h-.5c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5h.5V16c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3Z" /></svg>;
const ForwardRef = forwardRef(PuzzleIcon);
export default createLucideIcon('PuzzleIcon', ForwardRef);
