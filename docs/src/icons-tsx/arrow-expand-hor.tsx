import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowExpandHorIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m18 8 4 4m0 0-4 4m4-4H2m4-4-4 4m0 0 4 4" /></svg>;
const ForwardRef = forwardRef(ArrowExpandHorIcon);
export default ForwardRef;
