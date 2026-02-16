import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Banknote1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h1m12 8h1m-5-4c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2M2 16V8c0-1.6569 1.3432-3 3-3h14c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3H5c-1.6568 0-3-1.3431-3-3" /></svg>;
const ForwardRef = forwardRef(Banknote1Icon);
export default ForwardRef;
