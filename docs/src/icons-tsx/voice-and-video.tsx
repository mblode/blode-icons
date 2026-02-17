import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VoiceAndVideoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={16} strokeWidth={2} d="M14 6h2c1.6569 0 3 1.3431 3 3v6c0 1.6569-1.3431 3-3 3M19 10l2.5992-1.1372c.6607-.289 1.4008.195 1.4008.9161v4.442c0 .7212-.7401 1.2052-1.4008.9162L19 13.9999M13 13c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={16} strokeWidth={2} d="M4 8c0-1.6569 1.3431-3 3-3s3 1.3431 3 3v5c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3z" /></svg>;
const ForwardRef = forwardRef(VoiceAndVideoIcon);
export default ForwardRef;
