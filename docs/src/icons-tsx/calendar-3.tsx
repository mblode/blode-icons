import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Calendar3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M8 5V3m8 2V3M8 9h8M7 20h10c1.6569 0 3-1.3431 3-3V8c0-1.6569-1.3431-3-3-3H7C5.3431 5 4 6.3431 4 8v9c0 1.6569 1.3431 3 3 3Z" /></svg>;
const ForwardRef = forwardRef(Calendar3Icon);
export default ForwardRef;
