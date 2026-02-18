import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TodosIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9.25 13 2 1.75 3.5-5M16 20h1c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h1" /></svg>;
const ForwardRef = forwardRef(TodosIcon);
export default createLucideIcon('TodosIcon', ForwardRef);
