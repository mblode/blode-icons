import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ToastIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M19 12.143c1.2508-.8588 2-1.9523 2-3.143 0-2.7614-4.0294-5-9-5S3 6.2386 3 9c0 1.1907.7492 2.2842 2 3.143V17c0 1.6569 1.3431 3 3 3h8c1.6569 0 3-1.3431 3-3z" /></svg>;
const ForwardRef = forwardRef(ToastIcon);
export default ForwardRef;
