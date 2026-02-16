import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HeartIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M21 10c0 5.75-8.25 10-9 10s-9-4.25-9-10c0-4 2.5-6 5-6s4 1.5 4 1.5S13.5 4 16 4s5 2 5 6Z" /></svg>;
const ForwardRef = forwardRef(HeartIcon);
export default ForwardRef;
