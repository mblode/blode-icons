import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DividerIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 5h2m6 0h2m6 0h2M3 19h2m6 0h2m6 0h2" /></svg>;
const ForwardRef = forwardRef(DividerIcon);
export default ForwardRef;
