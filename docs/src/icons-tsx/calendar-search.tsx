import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarSearchIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20H7c-1.6569 0-3-1.3431-3-3V9m0 0V8c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v1M4 9h16M8 5V3m8 2V3m4 6v1m-.8787 9.1213c-1.1716 1.1716-3.071 1.1716-4.2426 0s-1.1716-3.071 0-4.2426 3.071-1.1716 4.2426 0 1.1716 3.0711 0 4.2426m0 0L21 21" /></svg>;
const ForwardRef = forwardRef(CalendarSearchIcon);
export default ForwardRef;
