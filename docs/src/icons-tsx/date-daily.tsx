import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DateDailyIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M13.5 5.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5S11.1716 4 12 4s1.5.6716 1.5 1.5ZM13.5 12c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5ZM20 5.5c0 .8284-.6716 1.5-1.5 1.5S17 6.3284 17 5.5 17.6716 4 18.5 4s1.5.6716 1.5 1.5ZM20 12c0 .8284-.6716 1.5-1.5 1.5S17 12.8284 17 12s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5ZM13.5 18.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5ZM7 12c0 .8284-.6716 1.5-1.5 1.5S4 12.8284 4 12s.6716-1.5 1.5-1.5S7 11.1716 7 12ZM7 18.5c0 .8284-.6716 1.5-1.5 1.5S4 19.3284 4 18.5 4.6716 17 5.5 17s1.5.6716 1.5 1.5Z" /></svg>;
const ForwardRef = forwardRef(DateDailyIcon);
export default ForwardRef;
