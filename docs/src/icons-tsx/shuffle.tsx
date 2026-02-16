import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShuffleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18h.7574a3 3 0 0 0 2.1213-.8787l9.2426-9.2426A3 3 0 0 1 17.2426 7H19M3 6h.7574a3 3 0 0 1 2.1213.8787L8 9m11 8h-1.7574a3 3 0 0 1-2.1213-.8787L14 15m4-11 3 3-3 3m0 4 3 3-3 3" /></svg>;
const ForwardRef = forwardRef(ShuffleIcon);
export default ForwardRef;
