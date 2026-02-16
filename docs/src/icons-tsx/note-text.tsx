import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NoteTextIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 20v-2c0-1.6569 1.3431-3 3-3h2M9 9h6m-6 4h2m9 1.7574V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v10c0 1.6569 1.3431 3 3 3h7.7574a3 3 0 0 0 2.1213-.8787l2.2426-2.2426A3 3 0 0 0 20 14.7574" /></svg>;
const ForwardRef = forwardRef(NoteTextIcon);
export default ForwardRef;
