import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PizzaIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="m17.6808 17.5284-.0813.4744c-.2826 1.6487-1.8734 2.7715-3.4411 2.188-2.2969-.8548-4.4512-2.2053-6.2975-4.0516s-3.197-4.0007-4.0517-6.2976c-.5834-1.5677.5393-3.1585 2.188-3.4411l.4744-.0814m11.2092 11.2093.7378-4.3036m-.7378 4.3036a14.02 14.02 0 0 1-4.5738-1.7314M6.4716 6.3192c.5079 2.6854 1.801 5.2516 3.8793 7.3299a14.12 14.12 0 0 0 2.7561 2.1479M6.4716 6.3192l5.6353-.9661m6.3117 7.8717C17.8725 12.482 16.9926 12 16 12c-1.6569 0-3 1.3431-3 3 0 .276.0373.5432.107.797m5.3116-2.5722.8648-5.0444c.3497-2.0404-1.4234-3.8135-3.4638-3.4638l-.2506.043m0 0c.2699.341.431.7718.431 1.2404 0 1.1046-.8954 2-2 2s-2-.8954-2-2c0-.2264.0376-.444.1069-.6469m3.4621-.5935-3.4621.5935" /></svg>;
const ForwardRef = forwardRef(PizzaIcon);
export default ForwardRef;
