import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TeacherIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12v5c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3v-5m16 0h1m-1 0h-4.786M4 12H3m1 0h4.786M4 12V9.5M8.786 12c.7056-.9123 1.8325-1.5 3.214-1.5s2.5084.5877 3.214 1.5m-6.428 0h6.428M6.5 12V9.5m8-4C14.5 6.8807 13.3807 8 12 8S9.5 6.8807 9.5 5.5 10.6193 3 12 3s2.5 1.1193 2.5 2.5" /></svg>;
const ForwardRef = forwardRef(TeacherIcon);
export default createLucideIcon('TeacherIcon', ForwardRef);
