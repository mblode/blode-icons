import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AutoCorrectIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 19 7-16 4.8125 11H5.5M14 18.6667 16.3333 21 21 14" /></svg>;
const ForwardRef = forwardRef(AutoCorrectIcon);
export default ForwardRef;
