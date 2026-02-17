import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirpodRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 20v-6h2.25c.9665 0 1.75.7835 1.75 1.75s-.7835 1.75-1.75 1.75H5.5m.8811.002c1.9967 0 2.5173 1.1036 2.6045 2.498M16 12.7439V18.5c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5v-10C19 6.0147 16.9853 4 14.5 4c-.3578 0-.7058.0418-1.0395.1207C12.4863 4.351 12 5.3587 12 6.3597v4.2806c0 1.0011.4863 2.0087 1.4605 2.239A4.5 4.5 0 0 0 14.5 13c.526 0 1.0308-.0902 1.5-.2561m0 0V12" /></svg>;
const ForwardRef = forwardRef(AirpodRightIcon);
export default ForwardRef;
