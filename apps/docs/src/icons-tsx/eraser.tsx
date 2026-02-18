import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EraserIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="m6.9996 11 6.4999 6.5m-9.3786-4.6213 9.0073-9.0073c1.1716-1.1716 3.0711-1.1716 4.2427 0l2.805 2.805c1.1528 1.1528 1.1739 3.0152.0476 4.1939l-7.8377 8.2023a3 3 0 0 1-2.169.9274H8.2422a3 3 0 0 1-2.1213-.8786l-2-2c-1.1716-1.1716-1.1716-3.0711 0-4.2427Z" /></svg>;
const ForwardRef = forwardRef(EraserIcon);
export default createLucideIcon('EraserIcon', ForwardRef);
