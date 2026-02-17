import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BlockIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 20V7c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v13M5 20h14M5 20H3m16 0h2M9 8h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1" /></svg>;
const ForwardRef = forwardRef(BlockIcon);
export default ForwardRef;
