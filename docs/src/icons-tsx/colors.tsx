import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ColorsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M7.4302 10.0321A4.98 4.98 0 0 1 7 8c0-2.7614 2.2386-5 5-5s5 2.2386 5 5a4.98 4.98 0 0 1-.4302 2.0321m-9.1396 0C4.9371 10.3149 3 12.4312 3 15c0 2.7614 2.2386 5 5 5 1.6356 0 3.0878-.7853 4-1.9995m-4.5698-7.9684c.7052 1.5834 2.2091 2.7326 4 2.9358m5.1396-2.9358A5 5 0 0 0 16 10c-1.6356 0-3.0878.7853-4 1.9995m4.5698-1.9674C19.0629 10.3149 21 12.4312 21 15c0 2.7614-2.2386 5-5 5-1.6356 0-3.0878-.7853-4-1.9995m0-6.001a5 5 0 0 0-.5698.9684M12 11.9995a5 5 0 0 1 .5698.9684m-1.1396 0a5.06 5.06 0 0 0 1.1396 0m0 0A4.98 4.98 0 0 1 13 15a4.978 4.978 0 0 1-1 3.0005" /></svg>;
const ForwardRef = forwardRef(ColorsIcon);
export default ForwardRef;
