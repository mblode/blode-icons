import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NotesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.5 12h2m4.5 0h2m-2-4h4M3.5 8h2m-2 8h2m2 4.5h9c1.6569 0 3-1.3431 3-3v-11c0-1.6569-1.3431-3-3-3h-9c-1.6569 0-3 1.3431-3 3v11c0 1.6569 1.3431 3 3 3" /></svg>;
const ForwardRef = forwardRef(NotesIcon);
export default ForwardRef;
