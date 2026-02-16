import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HotDrinkCupIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5.5 6 .6708-1.3416A3 3 0 0 1 8.8541 3h6.2918a3 3 0 0 1 2.6833 1.6584L18.5 6m-13 0h13m-13 0C4.6716 6 4 6.6716 4 7.5S4.6716 9 5.5 9h13c.8284 0 1.5-.6716 1.5-1.5S19.3284 6 18.5 6M4.9 9l.9833 9.3149C6.0443 19.8414 7.3318 21 8.8667 21h6.2667c1.5349 0 2.8223-1.1586 2.9834-2.6851L19.1 9" /></svg>;
const ForwardRef = forwardRef(HotDrinkCupIcon);
export default ForwardRef;
