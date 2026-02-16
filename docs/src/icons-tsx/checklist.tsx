import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChecklistIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h7m-7-8h7M4 9l1.5 1 3-4M4 17l1.5 1 3-4" /></svg>;
const ForwardRef = forwardRef(ChecklistIcon);
export default ForwardRef;
