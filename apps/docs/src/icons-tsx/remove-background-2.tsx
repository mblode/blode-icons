import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RemoveBackground2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 4H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3M12 2v20" /><path fill="currentColor" d="M8 4v4H4c0-.93 0-1.395.1022-1.7765a3 3 0 0 1 2.1213-2.1213C6.605 4 7.07 4 8 4M12 8v4H8V8zM8 12v4H4v-4zM12 16v4H8v-4z" /></svg>;
const ForwardRef = forwardRef(RemoveBackground2Icon);
export default createLucideIcon('RemoveBackground2Icon', ForwardRef);
