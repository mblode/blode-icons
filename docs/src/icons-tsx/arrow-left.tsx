import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="lucide lucide-arrow-left" viewBox="0 0 24 24" ref={ref} {...props}><path d="m12 19-7-7 7-7M19 12H5" /></svg>;
const ForwardRef = forwardRef(ArrowLeftIcon);
export default ForwardRef;
