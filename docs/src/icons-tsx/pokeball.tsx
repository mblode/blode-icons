import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PokeballIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9m18 0c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9m18 0h-6M3 12h6m6 0c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3m6 0c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3" /></svg>;
const ForwardRef = forwardRef(PokeballIcon);
export default ForwardRef;
