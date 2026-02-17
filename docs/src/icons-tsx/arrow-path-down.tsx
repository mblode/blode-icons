import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowPathDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M14.9998 14V6c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v8H5.5674c-.424 0-.6555.4944-.3841.8201l5.6642 6.7971c.5997.7196 1.705.7196 2.3047 0l5.6642-6.7971c.2714-.3257.0398-.8201-.3841-.8201z" /></svg>;
const ForwardRef = forwardRef(ArrowPathDownIcon);
export default ForwardRef;
