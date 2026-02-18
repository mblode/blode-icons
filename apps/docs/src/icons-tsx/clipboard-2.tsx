import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Clipboard2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M16 5h1c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3h1m8 2V6c0-1.6569-1.3431-3-3-3h-2C9.3431 3 8 4.3431 8 6v1z" /></svg>;
const ForwardRef = forwardRef(Clipboard2Icon);
export default createLucideIcon('Clipboard2Icon', ForwardRef);
