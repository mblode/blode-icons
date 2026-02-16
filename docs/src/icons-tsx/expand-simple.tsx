import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ExpandSimpleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 13v3c0 1.1046.8954 2 2 2h3m2-12h3c1.1046 0 2 .8954 2 2v3" /></svg>;
const ForwardRef = forwardRef(ExpandSimpleIcon);
export default ForwardRef;
