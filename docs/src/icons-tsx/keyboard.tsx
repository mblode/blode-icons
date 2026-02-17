import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const KeyboardIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13v8m6-8v8M7.5 4v9h3V4zm6 0v9h3V4zM7 21h10c1.6569 0 3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3H7C5.3431 4 4 5.3431 4 7v11c0 1.6569 1.3431 3 3 3" /></svg>;
const ForwardRef = forwardRef(KeyboardIcon);
export default ForwardRef;
