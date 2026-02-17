import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const InfoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" ref={ref} {...props}><path d="M12 21V10m0-7h.01" /></svg>;
const ForwardRef = forwardRef(InfoIcon);
export default ForwardRef;
