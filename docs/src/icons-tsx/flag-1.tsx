import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Flag1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15V4c0-.5523.4477-1 1-1h13.1315c.7987 0 1.2751.8902.832 1.5547l-2.5937 3.8906a1 1 0 0 0 0 1.1094l2.5937 3.8906c.4431.6646-.0333 1.5547-.832 1.5547zm0 0v6" /></svg>;
const ForwardRef = forwardRef(Flag1Icon);
export default createLucideIcon('Flag1Icon', ForwardRef);
