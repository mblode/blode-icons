import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareCircleTopRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h10c1.6569 0 3-1.3431 3-3v-4m.1213-9.1213c1.1716 1.1716 1.1716 3.071 0 4.2426s-3.071 1.1716-4.2426 0-1.1716-3.071 0-4.2426 3.071-1.1716 4.2426 0" /></svg>;
const ForwardRef = forwardRef(SquareCircleTopRightIcon);
export default createLucideIcon('SquareCircleTopRightIcon', ForwardRef);
