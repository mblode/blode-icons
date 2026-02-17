import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Text1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6V4h8m8 2V4h-8m0 0v16m0 0h-2m2 0h2" /></svg>;
const ForwardRef = forwardRef(Text1Icon);
export default ForwardRef;
