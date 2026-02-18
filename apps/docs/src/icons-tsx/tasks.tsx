import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TasksIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 4H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3M12 9.5h4M12 14.5h4" /><circle cx={8.25} cy={9.5} r={1.25} fill="currentColor" /><circle cx={8.25} cy={14.5} r={1.25} fill="currentColor" /></svg>;
const ForwardRef = forwardRef(TasksIcon);
export default createLucideIcon('TasksIcon', ForwardRef);
