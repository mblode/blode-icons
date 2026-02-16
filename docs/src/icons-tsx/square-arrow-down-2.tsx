import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareArrowDown2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M17 4H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 13-3 3-3-3M12 8v7" /></svg>;
const ForwardRef = forwardRef(SquareArrowDown2Icon);
export default ForwardRef;
